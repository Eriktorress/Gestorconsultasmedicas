import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  selectedImage: any;

  constructor( ) {}

  checkPlatformForweb(){
    if(Capacitor.getPlatform() =='web') return true;
    return false; 
  }

  async getPicture(){
    const image = await Camera.getPhoto({
      quality: 90,
      source: CameraSource.Prompt,
      width: 600,
      resultType: this.checkPlatformForweb()? CameraResultType.DataUrl : CameraResultType.Uri
    });
    console.log('image: ',image);
    this.selectedImage= image;
    if(this.checkPlatformForweb()) this.selectedImage.webPath = image.dataUrl;


  }




  ngOnInit() {
  }

}
