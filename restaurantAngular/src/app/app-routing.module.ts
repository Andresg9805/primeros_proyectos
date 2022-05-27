import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"contactenos",component:ContactoComponent},
  {path:"login",component:LoginComponent},
  {path:"menu",component:MenuComponent},
  {path:"nosotros",component:NosotrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
