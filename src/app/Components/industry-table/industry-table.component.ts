import { Component } from '@angular/core';
import { Router } from 'express';
import { IndustryService } from '../../Services/Industry/industry.service';
import { Industry } from '../../Models/Interfaces/Industry';
import { CommonModule } from '@angular/common';
import { IndustryPopupComponent } from '../industry-popup/industry-popup.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-industry-table',
  standalone: true,
  imports: [CommonModule, IndustryPopupComponent],
  templateUrl: './industry-table.component.html',
  styleUrl: './industry-table.component.scss'
})
export class IndustryTableComponent {
  public Industries: Industry[] = [];
  public isPopUpVisible: boolean = false;

  constructor(private industryService: IndustryService) { }

  ngOnInit(): void {
    this.getIndustries();
  }

  togglePopUp() {
    this.isPopUpVisible = !this.isPopUpVisible;
    this.getIndustries();
  }

  getIndustries(){
    this.industryService.getIndustries().subscribe(
      (industry: Industry[]) => {
        this.Industries = industry;
      }
    );
  }

  deleteIndustry(name: string) {
    this.industryService.deleteIndustry(name).subscribe(
      () => {
        // Success message
        Swal.fire({
          title: 'Success!',
          text: `Industry ${name} is deleted.`,
          icon: 'success',
          confirmButtonText: 'OK'
        });
        // Refresh industries after deletion
        this.getIndustries();
      },
      error => {
        // Check for specific error response status codes if needed
        if (error.status === 200) {
          // Unauthorized error, handle accordingly
          Swal.fire({
            title: 'Success!',
            text: `Industry ${name} is deleted.`,
            icon: 'success',
            confirmButtonText: 'OK'
          });
          // Refresh industries after deletion
          this.getIndustries();
        } else {
          // Other error, display generic error message
          console.error('An error occurred:', error);
          Swal.fire({
            title: 'Error!',
            text: `An error occurred. Please try again later.`,
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      }
    );
  }
  
}
