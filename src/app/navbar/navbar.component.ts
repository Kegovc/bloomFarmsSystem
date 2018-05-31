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
      this.videoplayer.nativeElement.play();
      alert('hola');
  }

  onClickVideo() {
    if (this.videoplayer.nativeElement.paused) {
      this.videoplayer.nativeElement.play();
    } else {
      this.videoplayer.nativeElement.pause();
    }
  }
}
