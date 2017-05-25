import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import { AngularmService, EntityTypeComponent } from 'angularm';

@Component({
  selector: 'app-new-entity',
  templateUrl: './new-entity.component.html',
  styleUrls: ['./new-entity.component.css']
})
export class NewEntityComponent extends EntityTypeComponent implements OnInit {

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
        this.angularm.findEntityType(params['entitytypename'])
      )
      .subscribe( (entityType: any) =>
        this.entityType = entityType
      );
  }

  onSubmit(form: any): void {
    this.angularm.create(this.entityType.singular, form);
    const idPropertyType: string = this.entityType.tags.id;
    this.router.navigate([this.entityType.plural, form[idPropertyType] ]);
  }
}
