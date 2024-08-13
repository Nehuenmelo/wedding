import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import GuestResponse from '../interfaces/GuestResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestResponsesService {

  constructor(private firestore: AngularFirestore) { }

  addGuestResponse(guestResponse: GuestResponse) {
    return this.firestore.collection('guestResponses').add(guestResponse);
  }

  getGuestResponses(): Observable<GuestResponse[]> {
    return this.firestore.collection<GuestResponse>('guestResponses').valueChanges();
  }
}