import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AngularmService, EntityComponent, EntityType, Entity } from 'angularm';

@Component({
  selector: 'app-edit-entity',
  templateUrl: './edit-entity.component.html',
  styleUrls: ['./edit-entity.component.css']
})
export class EditEntityComponent extends EntityComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
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
      .subscribe( (entity: any) => {
        this.entity = entity;
        const fbConf: any = {};

        this.entity.entityType.properties.forEach(propertyType => {
          fbConf[propertyType.name] = this.entity.properties[propertyType.name];
        });

        this.myForm = this.fb.group(fbConf);
      });
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

  onSubmit(): void {
    this.angularm.edit(this.entity.entityType.singular, this.entity.key, this.myForm.value);
    this.router.navigate([this.entity.entityType.plural, this.myForm.value[this.entity.entityType.tags.id]]);
  }

  show() {
    this.router.navigate([this.entity.entityType.plural, this.entity.key]);
    return false;
  }

  back() {
    this.router.navigate([this.entity.entityType.plural]);
    return false;
  }
}
