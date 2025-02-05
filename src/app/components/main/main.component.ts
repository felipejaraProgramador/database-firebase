import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { Profile } from '../../interfaces/profile';
import { CommonModule } from '@angular/common';
import { ProfilesService } from '../../services/profiles.service';
import { Console } from 'console';

@Component({
  selector: 'app-main',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  formProfile : FormGroup;

  profiles: Profile[] = [
    {
      id: "1",
      name: "Nombre1",
      lastname: "apellido1"
    },
    {
      id: "2",
      name: "Nombre2",
      lastname: "apellido2"
    }
  ]

  ngOnInit(): void{
    this.getListProfiles()
  }

  constructor(private profilesService: ProfilesService){
    this.formProfile = new FormGroup({
      name: new FormControl(),
      lastname: new FormControl()
    })
  }

  onSubmit(){
    this.profilesService.addProfile(this.formProfile.value)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  getListProfiles(){
    this.profilesService.getProfiles().subscribe( profiles => {

      if(profiles.length == 0){
        console.log("Array vacio, te muestro un listado predeterminado 🫡")
      }else{
        console.log("Ahora si hay datos 👌")
        this.profiles = profiles
      }
    })
  }



  async onDelete(id: string){
    console.log("Eliminando a: ",id)

    await this.profilesService.deleteProfile(id)
      .then( () => {
        console.log("✅ Se ha eliminado: ",id)
      
      }).catch( () => {
        console.log("❌ No se ha podido eliminar ")
      })
    
      this.getListProfiles()

  }

}
