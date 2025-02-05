import { Injectable } from '@angular/core';
import { collection, Firestore, addDoc, collectionData, doc, deleteDoc, docData} from '@angular/fire/firestore';
import { Profile } from '../interfaces/profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor(private firestore: Firestore) { }

  addProfile(profile: Profile){
    const profileRef = collection(this.firestore, 'profiles');

    return addDoc(profileRef, profile)
  }

  getProfiles(): Observable<Profile[]>{
    const profileRef = collection(this.firestore, 'profiles');
    return collectionData(profileRef, {idField: 'id'}) as Observable<Profile[]>
  }

  deleteProfile(idProfile: string){
    const profileDocRef = doc(this.firestore, `profiles/${idProfile}`);

      return deleteDoc(profileDocRef)
  }

}
