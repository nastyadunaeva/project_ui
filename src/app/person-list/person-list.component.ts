import { Component, OnInit } from '@angular/core';
import { Person } from "../person/person.model";
import { PersonService } from "../person/person.service";
//import { persons } from '../persons';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {
  persons: Person[];

  constructor(private personService: PersonService) {
    this.persons = [];
  }

  ngOnInit() {
    this.personService.list().subscribe((persons: Person[]) => {
      this.persons = persons;
    });
  }

}
