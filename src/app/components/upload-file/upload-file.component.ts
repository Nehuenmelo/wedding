/* import { Component } from '@angular/core';
import { Storage, ref } from '@angular/fire/storage';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { GuestResponsesService } from 'src/app/services/guest-responses.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {
	selectedFile: File | null = null;

  constructor(private storage: AngularFireStorage, private guestResponsesService: GuestResponsesService) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  async uploadPhoto() {
    if (this.selectedFile) {
      try {
        const photoURL = await this.guestResponsesService.uploadPhoto(this.selectedFile);
        console.log('Foto subida con éxito:', photoURL);
        // Aquí puedes emitir un evento o realizar alguna acción con la URL de la foto subida
      } catch (error) {
        console.error('Error subiendo la foto: ', error);
      }
    }
  }
}
 */