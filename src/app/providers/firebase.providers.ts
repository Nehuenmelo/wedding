// src/app/providers/firebase.providers.ts
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { InjectionToken } from '@angular/core';

export const FIREBASE_APP = new InjectionToken<FirebaseApp>('firebase.app');
export const FIRESTORE = new InjectionToken<Firestore>('firestore');

export function provideFirebaseApp(): FirebaseApp {
  return initializeApp(environment.firebaseConfig);
}

export function provideFirestore(app: FirebaseApp): Firestore {
  return getFirestore(app);
}
