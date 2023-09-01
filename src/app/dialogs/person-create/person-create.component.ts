import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { PersonInterface } from 'src/app/interfaces/person-interface';
import { PersonCreateData } from 'src/app/interfaces/person-create';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent {
  private backupPerson: Partial<PersonInterface> = { ...this.data.person };

  constructor(
    public dialogRef: MatDialogRef<PersonCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PersonCreateData
  ) {}

  cancel(): void {
    this.data.person.name = this.backupPerson.name;
    this.data.person.age = this.backupPerson.age;
    this.data.person.docNumber = this.backupPerson.docNumber;
    this.dialogRef.close(this.data);
  }
}
