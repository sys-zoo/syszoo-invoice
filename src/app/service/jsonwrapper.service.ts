import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonwrapperService {

  constructor() { }

  public wrap(value) {
    var jsonString = JSON.stringify(value);
    return jsonString;
  }

  public unwrap(jsonString) {
    var jsonObj = JSON.parse(jsonString); // string to "any" object first
    return jsonObj;
  }
}
