import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import { AngularmService, EntityType, EntityComponent } from 'angularm';

@Component({
  selector: 'app-show-entity',
  templateUrl: './show-entity.component.html',
  styleUrls: ['./show-entity.component.css']
})
export class ShowEntityComponent extends EntityComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private angularm: AngularmService
  ) {
    super();
  }

  ngOnInit() {
    this.route.params
      .switchMap( (params: Params) =>
        this.mapEntityParam(params)
      )
      .subscribe( (entity: any) =>
        this.entity = entity
      );
  }

  mapEntityParam(params: Params): Promise<any> {
    return new Promise((resolve) => {
      this.angularm.findEntityType(params['entitytypename']).then(
        (entityType: EntityType) => {
          const entityPromise = this.angularm.findUnique(entityType.singular, params['key']);
          resolve(entityPromise);
        }
      );
    });
  }

  back() {
    this.router.navigate([this.entity.entityType.plural]);
    return false;
  }

  edit() {
    this.router.navigate([this.entity.entityType.plural, this.entity.key, 'edit']);
    return false;
  }

}
