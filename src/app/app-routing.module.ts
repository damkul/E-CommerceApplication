import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"men",component:MenComponent},
  {path:"women",component:WomenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponent = [HeaderComponent,FooterComponent,MenComponent,WomenComponent]
