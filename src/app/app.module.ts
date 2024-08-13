import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { CeremonyComponent } from './components/ceremony/ceremony.component';
//import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { WeComponent } from './components/we/we.component';
import { GiftsComponent } from './components/gifts/gifts.component';
import { ConfirmAssistanceComponent } from './components/confirm-assistance/confirm-assistance.component';
import { PeopleListComponent } from './pages/people-list/people-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ImageModule } from 'primeng/image';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { TableModule } from 'primeng/table';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomeComponent,
    CountdownComponent,
    CeremonyComponent,
    //UploadFileComponent,
    WeComponent,
    GiftsComponent,
    ConfirmAssistanceComponent,
    PeopleListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    FileUploadModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    SelectButtonModule,
    DialogModule,
		ToastModule,
		ImageModule,
		TableModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
