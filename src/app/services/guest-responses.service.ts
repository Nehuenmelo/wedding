import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import GuestResponse from '../interfaces/GuestResponse';

@Injectable({
  providedIn: 'root'
})
export class GuestResponsesService {

  constructor(private firestore: AngularFirestore) { }

  addGuestResponse(guestResponse: GuestResponse){
    return this.firestore.collection('guestResponses').add(guestResponse);
  }
}
