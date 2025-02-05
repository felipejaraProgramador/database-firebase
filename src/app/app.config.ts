import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp({ projectId: "authfirebase-test", appId: "1:897058397446:web:ce5b09b771474a89599287", storageBucket: "authfirebase-test.firebasestorage.app", apiKey: "AIzaSyDZI_0H3cH4_R0A7PMI_6wymNikk-5y3WY", authDomain: "authfirebase-test.firebaseapp.com", messagingSenderId: "897058397446" })), provideFirestore(() => getFirestore())]
};
