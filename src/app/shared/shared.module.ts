import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [HeaderComponent, SideMenuComponent, LoadingComponent ],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent, SideMenuComponent, LoadingComponent],
})
export class SharedModule {}
