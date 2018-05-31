import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('videoPlayer') videoplayer: any;

  constructor() { }

  ngOnInit() {
    console.log(this.videoplayer.nativeElement.paused);
    if (this.videoplayer.nativeElement.paused) {
      this.videoplayer.nativeElement.play().ToPromices();
    }
  }

  onClickVideo() {
    if (this.videoplayer.nativeElement.paused) {
      this.videoplayer.nativeElement.play();
    } else {
      this.videoplayer.nativeElement.pause();
    }
  }
}


