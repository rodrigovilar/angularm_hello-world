import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AngularmModule } from 'angularm';

import { AppComponent } from './app.component';
import { ListEntityTypeComponent } from './list-entity-type/list-entity-type.component';
import { NewEntityComponent } from './new-entity/new-entity.component';
import { ShowEntityComponent } from './show-entity/show-entity.component';
import { EditEntityComponent } from './edit-entity/edit-entity.component';
import { EditFormLineComponent } from "app/edit-entity/edit-form-line";

export const routes: Routes = [
  { path: ':entitytypename', component: ListEntityTypeComponent },
  { path: ':entitytypename/new', component: NewEntityComponent },
  { path: ':entitytypename/:key', component: ShowEntityComponent },
  { path: ':entitytypename/:key/edit', component: EditEntityComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEntityTypeComponent,
    NewEntityComponent,
    ShowEntityComponent,
    EditEntityComponent,
    EditFormLineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularmModule
  ],
  providers: [],
  entryComponents: [
    EditFormLineComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
