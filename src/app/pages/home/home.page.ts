import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( public navCtrl: NavController ) { }

  ngOnInit() {
  }

  // Ação do botão "Listar usuários"
  listUsers() {
    this.navCtrl.navigateForward('usuarios/todos');
  }

// Ação do botão "Criar usuario"
  createUsers() {
    this.navCtrl.navigateForward('usuarios/criar');
  }

  // Ação do botão "Status do Dispositivo"
  devStatus() {
    this.navCtrl.navigateForward('dev/status');
  }

  // Ação do botão "Tirar Foto"
  devCamera() {
    this.navCtrl.navigateForward('dev/camera');
  }

  // Ação do botão "GPS"
  geolocation() {
    this.navCtrl.navigateForward('dev/gps');
  }
}
