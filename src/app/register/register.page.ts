import { Component, OnInit } from '@angular/core';
import { AccountService } from './../services/account.service';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    nickname: any;
    firstname: any;
    lastname: any;
    email: any;
    verifyemail: any;
    password: any;
    verifypassword: any;

    constructor(private accountService: AccountService) {

    }

    register() {
        this.accountService.registerUser(this.nickname, this.firstname, this.lastname, this.email, this.password);
    }

    ngOnInit() {
    }

}
