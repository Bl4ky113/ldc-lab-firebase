import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PersonInterface } from 'src/app/interfaces/person-interface';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent {
  @Input() person!: PersonInterface;
  @Output() edit: EventEmitter<PersonInterface> =  new EventEmitter<PersonInterface>();
}
