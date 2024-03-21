import { Component } from '@angular/core';
import { EducationInstitutePopupComponent } from '../education-institute-popup/education-institute-popup.component';
import { educationInstitute } from '../../Models/Interfaces/educationInstitue';
import Swal from 'sweetalert2';
import { EducationInstituteService } from '../../Services/EducationInstitute/education-institute.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-education-institute-table',
  standalone: true,
  imports: [EducationInstitutePopupComponent, CommonModule],
  templateUrl: './education-institute-table.component.html',
  styleUrl: './education-institute-table.component.scss'
})
export class EducationInstituteTableComponent {
  public educationInstitutes: educationInstitute[] = []
  public isPopUpVisible: boolean = false;

  constructor(private educationInstituteService: EducationInstituteService) { }

  ngOnInit(): void {
    this.getEducationInstitutes();
  }

  togglePopup() {
    this.isPopUpVisible = !this.isPopUpVisible;
    this.getEducationInstitutes();
  }

  getEducationInstitutes() {
    this.educationInstituteService.getEducationInstitutes().subscribe(
      (educationInstitute: educationInstitute[]) => {
        this.educationInstitutes = educationInstitute;
      }
    );
  }

  deleteEducationInstitute(name: string) {
    this.educationInstituteService.deleteEducationInstitute(name).subscribe(() => {
      // Success message
      Swal.fire({
        title: 'Success!',
        text: `Industry ${name} is deleted.`,
        icon: 'success',
        confirmButtonText: 'OK'
      });
      // Refresh industries after deletion
      this.getEducationInstitutes();
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
        this.getEducationInstitutes();
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
