import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { WindowService } from './services/window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isMobile = false;

  constructor(private router: Router,
    private windowService: WindowService) {
  }

  get currentRoute(): string {
    return this.router.url;
  }

  get version(): string {
    return '1.2.0';
  }

  ngOnInit(){
    this.windowService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
    });
    this.onResize();    
  }

  @HostListener('window:resize')
  onResize(): void {
    this.windowService.checkWidth();
  }
}
