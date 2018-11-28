import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { DashComponent } from './dash/dash.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/template",
    pathMatch: 'full'
  },
  {
    path: 'dash',
    component: DashComponent
  },
  {
    path: 'template',
    component: TemplateFormComponent
  },
  {
    path: 'react',
    component: ReactFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
