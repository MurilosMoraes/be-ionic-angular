import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { RoutesMenu } from 'src/app/interfaces/IRoutesMenu';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  public routesMenu: RoutesMenu[] = [
    {
      title: 'Home',
      path: '/home',
      icon: 'home',
    },
    {
      title: 'Meu Treino',
      path: '/my-training',
      icon: 'barbell',
    },
    {
      title: 'Configurações',
      path: '/configuracoes',
      icon: 'settings',
    },
  ];

  constructor(private menuCtrl: MenuController, private router: Router, public location: Location) {}

  closeMenu(route: string) {
    this.router.navigate([route]);
    this.menuCtrl.close();
  }
}
