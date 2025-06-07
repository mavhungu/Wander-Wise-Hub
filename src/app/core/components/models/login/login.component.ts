import { ModelService } from './../../../../shared/services/model.service';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  showModal: boolean = false;

  constructor(private modalService: ModelService){}

  ngOnInit() {
    this.modalService.showModal$.subscribe((value) => {
      this.showModal = value;
    });
  }

  closeModal() {
    this.modalService.toggleModal();
  }

}
