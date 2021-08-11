import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Person } from "./person.model";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PersonService {
  private baseUrl = "/api/all";

  constructor(private http: HttpClient) {}

  list(): Observable<Person[]> {
    const url = `${this.baseUrl}/`;
    return this.http
      .get(url)
      .pipe(
        map((data: any) =>
          data.map(
            (item: any) =>
              new Person(item.firstName, item.lastName, item.username, item.role)
          )
        )
      );
  }
}
