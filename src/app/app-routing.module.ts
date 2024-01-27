import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

export const routes: Routes = [

  {
    path: '', component: NavComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'categorias', component:CategoriasComponent}
    ]
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
