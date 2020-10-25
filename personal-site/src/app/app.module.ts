import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { MatButtonModule, MatCardModule, MatChipsModule, MatDialogModule, MatGridListModule, MatIconModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { GalleryComponent } from './gallery/gallery.component';
import { PopoutGalleryComponent } from './gallery/popout-gallery/popout-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    GalleryComponent,
    PopoutGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatChipsModule,
    MatGridListModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PopoutGalleryComponent]
})
export class AppModule { }
