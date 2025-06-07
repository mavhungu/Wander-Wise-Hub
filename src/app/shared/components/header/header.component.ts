import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelService } from '../../services/model.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private modalService: ModelService) {}

  openModal() {
    this.modalService.toggleModal();
  }

}
