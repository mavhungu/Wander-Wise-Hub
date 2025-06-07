import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private showModalSource = new BehaviorSubject<boolean>(false);
  showModal$ = this.showModalSource.asObservable();

  constructor() { }

  toggleModal() {
    this.showModalSource.next(!this.showModalSource.value);
  }
}
