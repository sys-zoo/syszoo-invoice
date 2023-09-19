import { Injectable } from '@angular/core';
import { JsonwrapperService } from './jsonwrapper.service';
@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private jsonwrapperService: JsonwrapperService) { }

  public saveData(key: string, value) {
    var jsonString = this.jsonwrapperService.wrap(value);
    localStorage.setItem(key, jsonString);
  }

  public getData(key: string) {
    var jsonString = localStorage.getItem(key);
    var jsonObj = this.jsonwrapperService.unwrap(jsonString);
    return jsonObj
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
