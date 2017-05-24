import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AngularmModule } from 'angularm';

import { AppComponent } from './app.component';
import { ListEntityTypeComponent } from './list-entity-type/list-entity-type.component';

export const routes: Routes = [
  { path: ':entitytypename', component: ListEntityTypeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEntityTypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
