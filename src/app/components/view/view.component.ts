import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { PersonCreateComponent } from 'src/app/dialogs/person-create/person-create.component';

import { PersonInterface } from 'src/app/interfaces/person-interface';
import { PersonCreateResult } from 'src/app/interfaces/person-create';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  public people: PersonInterface[] = [
    {
      name: 'New person 1',
      age: 10,
      docNumber: "123456789"
    },
    {
      name: 'New person 2',
      age: 20,
      docNumber: "1234567890"
    }
  ];

  constructor (
    private dialog: MatDialog
  ) {  }

  newPerson (): void {
    const dialogRef = this.dialog.open(PersonCreateComponent, {
      width: '270px',
      data: {
        person: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: PersonCreateResult|undefined) => {
        if (!result) {
          return;
        }
        this.people.push(result.person);
      });
  }

  editPerson(person: PersonInterface): void {
    const dialogRef = this.dialog.open(PersonCreateComponent, {
      width: '270px',
      data: {
        person,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: PersonCreateResult|undefined) => {
      if (!result) {
        return;
      }
      const personIndex = this.people.indexOf(person);
      if (result.delete) {
        this.people.splice(personIndex, 1);
      } else {
        this.people[personIndex] = person;
      }
    });
  }
}
