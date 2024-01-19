import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { CeremonyComponent } from './components/ceremony/ceremony.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { WeComponent } from './components/we/we.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomeComponent,
    CountdownComponent,
    CeremonyComponent,
    UploadFileComponent,
    WeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
