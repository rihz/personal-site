import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, fromEvent, NEVER, Observable, Subject } from 'rxjs';

@Injectable()
export class WindowService {
    isMobile = new Subject();
    public screenWidth: string;

    constructor() {
        this.checkWidth();
    }

    onMobileChange(status: boolean) {
        this.isMobile.next(status);
    }

    getMobileStatus(): Observable<any> {
        return this.isMobile.asObservable();
    }

    public checkWidth() {
        const width = window.innerWidth;

        if(width <= 768) {
            this.screenWidth = 'sm';
            this.onMobileChange(true);
        } else {
            this.screenWidth = 'lg';
            this.onMobileChange(false);
        }
    }
}