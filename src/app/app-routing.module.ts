import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// PAGE IMPORTS
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HerosComponent } from './pages/heros/heros.component';
import { HeroDetailComponent } from "./pages/hero-detail/hero-detail.component";

const routes: Routes = [
  {
    path: 'hero', component: HerosComponent
  },
  {
    path: 'hero-detail', component: HeroDetailComponent
  },
  {
    path: '', redirectTo: '/hero', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
