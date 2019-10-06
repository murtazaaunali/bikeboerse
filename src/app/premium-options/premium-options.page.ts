import { Component, OnInit } from '@angular/core';
import { AccountService } from './../services/account.service';

@Component({
    selector: 'app-premium-options',
    templateUrl: './premium-options.page.html',
    styleUrls: ['./premium-options.page.scss'],
})
export class PremiumOptionsPage implements OnInit {
    options: any;
    constructor(private accountService: AccountService) {
        this.accountService.getAllPremiumOptions().subscribe(options => {
            this.options = options['records'];
            console.log(this.options);
        });
    }

    ngOnInit() {
    }

}
