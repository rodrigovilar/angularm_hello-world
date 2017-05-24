import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

import { AngularmService, EntityType, Entity } from "angularm";

@Component({
  selector: 'app-list-entity-type',
  templateUrl: './list-entity-type.component.html',
  styleUrls: ['./list-entity-type.component.css']
})
export class ListEntityTypeComponent implements OnInit {

  private entityType: EntityType;
  private entities: Entity[];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private angularm: AngularmService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap( (params: Params) =>
         this.angularm.findEntityType(params['entitytypename'])
      )
      .subscribe( (entityType: EntityType) => {
         this.entityType = entityType;
         
         this.angularm.listAll(this.entityType.singular)
           .then( (entities) => {
               this.entities = entities
             }
           );
       }
      );
  }

  show(id) {
    this.router.navigate([this.entityType.plural, id]);
    return false;
  }

  edit(id) {
    this.router.navigate([this.entityType.plural, id, 'edit']);
    return false;
  }

  destroy(id) {
    if (confirm('Are you sure?')) {
      this.angularm.delete(this.entityType.singular, id);
    }
    return false;
  }
}
