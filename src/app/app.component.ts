import { Component } from '@angular/core';

import { AngularmService, EntityTypesComponent } from 'angularm';
import { describeDomain } from './entities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends EntityTypesComponent {

  constructor(angularm: AngularmService) {
    super();
    describeDomain(angularm);
    this.entityTypes = angularm.listEntityTypes();

    angularm.create('book', {name: 'Refactoring', author: 'Fowler'});
    angularm.create('book', {name: 'Patterns', author: 'GoF'});

    angularm.create('product', {id: '1', description: 'Banana'});
    
  }
}
