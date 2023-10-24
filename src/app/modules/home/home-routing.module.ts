import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'welcome',
    loadChildren: () => import('../welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path:'convenio',
    loadChildren: () => import('../convenios/convenios.module').then(m => m.ConveniosModule)
  },
  {
    path:'proyecto',
    loadChildren: () => import('../proyecto/proyecto.module').then(m => m.ProyectoModule)
  },
  {
    path:'**',
    redirectTo:'welcome'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
