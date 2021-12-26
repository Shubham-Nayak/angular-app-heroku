import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListQuestionnaireComponent } from './questionnaire/list-questionnaire/list-questionnaire.component';
import { AddQuestionnaireComponent } from './questionnaire/add-questionnaire/add-questionnaire.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { CKEditorModule } from 'ckeditor4-angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
import * as $ from 'jquery';
import { ListCertificateComponent } from './certificates/list-certificate/list-certificate.component';
import { AddCertificateComponent } from './certificates/add-certificate/add-certificate.component';







@NgModule({
  declarations: [
    AppComponent,
    ListQuestionnaireComponent,
    AddQuestionnaireComponent,
    ListCertificateComponent,
    AddCertificateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    CKEditorModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
