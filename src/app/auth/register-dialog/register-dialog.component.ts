import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormFields } from '../../shared/form-builder-helper';
import { REGISTER_DIALOG_FIELDS } from './register-dialog.field';
import { FormDialogComponent } from '../../shared/form-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';
import { PostulationService } from '../../core/services/postulation.service';
import { Person } from '../../core/models/persona';
import { Observable } from 'rxjs';
import { MaterialModule } from '../../shared/material.module';
import { CommonModule } from '@angular/common';
import { DOCUMENT_TYPE, GENDER } from './types-select';
import { DialogFormatModule } from '../../shared/dialog-format.module';

@Component({
  selector: 'app-register-dialog',
  standalone: true,
  imports: [
    DialogFormatModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './register-dialog.component.html',
})
export class RegisterDialogComponent extends FormDialogComponent<any> implements OnInit {

  public static readonly maxWidth: number = 10 * 80 + 44;
  personForm!: FormGroup;
  dataSourceDocumentType = DOCUMENT_TYPE;
  dataSourceGender = GENDER;
  filesUpload: File[] = [];

  protected override formFields: FormFields = REGISTER_DIALOG_FIELDS;

  constructor(
    injector: Injector,
    dialogRef: MatDialogRef<RegisterDialogComponent>,
    private service: PostulationService,
  ) {
    super(injector, dialogRef, null);
  }
  getSaveService(model: Person): Observable<any> {
    return this.service.saveInfoPersona(model);
  }
}
