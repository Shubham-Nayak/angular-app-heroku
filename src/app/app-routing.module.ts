import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListQuestionnaireComponent } from './questionnaire/list-questionnaire/list-questionnaire.component';



const routes: Routes = [
  { path: 'questionnaire', component: ListQuestionnaireComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
