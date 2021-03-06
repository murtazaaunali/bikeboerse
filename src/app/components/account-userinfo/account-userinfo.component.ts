import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
import { AuthenticationService } from '../../services/authentication.service';
import { finalize } from 'rxjs/internal/operators/finalize';

const STORAGE_KEY = 'user_image';

@Component({
    selector: 'account-userinfo',
    templateUrl: './account-userinfo.component.html',
    styleUrls: ['./account-userinfo.component.scss'],
})
export class AccountUserinfoComponent implements OnInit {
    username: any;
    email: any;
    picture: any;
    user_id: any;
    images = [];

    constructor(private camera: Camera, private file: File, private http: HttpClient,
        private actionSheetController: ActionSheetController, private toastController: ToastController,
        private storage: Storage, private platform: Platform, private loadingController: LoadingController,
        private ref: ChangeDetectorRef, private filePath: FilePath, private webview: WebView) {
    }

    ngOnInit() {
        this.storage.get('USER_INFO').then((response) => {
            this.username = response.name;
            this.email = response.email;
            if (response.is_admin) {
                this.picture = "https://bikeboerse.com/userpic/" + response.picture + ".jpg";
            } else {
                this.picture = "https://graph.facebook.com/" + response.id + "/picture?width=80&height=80";
            }
            this.user_id = response.id;
        });

    }

    pathForImage(img) {
        if (img === null) {
            return '';
        } else {
            let converted = this.webview.convertFileSrc(img);
            return converted;
        }
    }

    async presentToast(text) {
        const toast = await this.toastController.create({
            message: text,
            position: 'bottom',
            duration: 3000
        });
        toast.present();
    }

    async selectImage() {
        const actionSheet = await this.actionSheetController.create({
            header: "Select Image source",
            buttons: [{
                text: 'Load from Library',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                }
            },
            {
                text: 'Use Camera',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.CAMERA);
                }
            },
            {
                text: 'Cancel',
                role: 'cancel'
            }
            ]
        });
        await actionSheet.present();
    }

    takePicture(sourceType: PictureSourceType) {
        var options: CameraOptions = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };

        this.camera.getPicture(options).then(imagePath => {
            if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
                this.filePath.resolveNativePath(imagePath)
                    .then(filePath => {
                        let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                        let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                    });
            } else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            }
        });

    }

    createFileName() {
        var d = new Date(),
            n = d.getTime(),
            newFileName = n + ".jpg";
        return newFileName;
    }

    copyFileToLocalDir(namePath, currentName, newFileName) {
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
            this.updateStoredImages(newFileName);
        }, error => {
            this.presentToast('Error while storing file.');
        });
    }

    updateStoredImages(name) {
        this.storage.get(STORAGE_KEY).then(images => {
            let arr = JSON.parse(images);
            if (!arr) {
                let newImages = [name];
                this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
            } else {
                arr.push(name);
                this.storage.set(STORAGE_KEY, JSON.stringify(arr));
            }

            let filePath = this.file.dataDirectory + name;
            let resPath = this.pathForImage(filePath);

            let newEntry = {
                name: name,
                path: resPath,
                filePath: filePath
            };

            this.images = [newEntry, ...this.images];
            this.ref.detectChanges(); // trigger change detection cycle
        });
    }

    startUpload(imgEntry) {
        this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
            .then(entry => {
                (<FileEntry> entry).file(file => this.readFile(file))
            })
            .catch(err => {
                this.presentToast('Error while reading file.');
            });
    }

    readFile(file: any) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const formData = new FormData();
            const imgBlob = new Blob([reader.result], {
                type: file.type
            });
            formData.append('file', imgBlob, file.name);
            this.uploadImageData(formData);
        };
        reader.readAsArrayBuffer(file);
    }

    async uploadImageData(formData: FormData) {
        const loading = await this.loadingController.create({
            message: 'Uploading image...',
        });
        await loading.present();

        this.http.post("http://localhost:8888/upload.php", formData)
            .pipe(
                finalize(() => {
                    loading.dismiss();
                })
            )
            .subscribe(res => {
                if (res['success']) {
                    this.presentToast('File upload complete.')
                } else {
                    this.presentToast('File upload failed.')
                }
            });
    }

}
