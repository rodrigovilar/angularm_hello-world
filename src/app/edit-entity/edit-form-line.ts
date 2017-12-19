import { Component, OnInit, ViewChild } from '@angular/core';

import { PropertyComponent } from 'angularm';

@Component({
    selector: 'div [mgEditFormLine]',
    template:
        `<div [formGroup]="mgFormControl.parent">
        <label
            for="{{property.propertyType.entityType.singular}}_{{property.propertyType.name}}"
        >{{property.propertyType.name | titleCase}}</label>
        <input
            type="{{configuration.inputType}}"
            id="{{property.propertyType.entityType.singular}}_{{property.propertyType.name}}"
            placeholder="{{property.propertyType.name | titleCase}}"
            formControlName="{{property.propertyType.name}}">
        <br>
        </div>`,
})
export class EditFormLineComponent extends PropertyComponent { }