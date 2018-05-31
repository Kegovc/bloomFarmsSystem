import { Component, OnInit, ViewChild, AfterViewChecked, DoCheck } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewChecked,DoCheck {

  @ViewChild('videoPlayer') videoplayer: any;

  constructor() { }

  ngOnInit() {}

  ngDoCheck(){
    console.log(this.videoplayer.nativeElement.paused);
  }

  ngAfterViewChecked() {
    console.log(this.videoplayer.nativeElement.paused);
  }

  onClickVideo() {
    if (this.videoplayer.nativeElement.paused) {
      this.videoplayer.nativeElement.play();
    } else {
      this.videoplayer.nativeElement.pause();
    }
  }
}
