import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  
  logosrc: any = {
    url: 'https://dummyimage.com/60x60/ffffff/000000.png&text=Logo',
    alt: 'Logo'
  };
  
  constructor() { }

  ngOnInit() {}

}
