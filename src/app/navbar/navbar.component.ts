import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewChecked {

  @ViewChild('videoPlayer') videoplayer: any;

  constructor() { }

  ngOnInit() {}

  ngAfterViewChecked() {
      this.videoplayer.nativeElement.play();
  }

  onClickVideo() {
    if (this.videoplayer.nativeElement.paused) {
      this.videoplayer.nativeElement.play();
    } else {
      this.videoplayer.nativeElement.pause();
    }
  }
}
