import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EducationInstituteService } from '../../Services/EducationInstitute/education-institute.service';
import Swal from 'sweetalert2';
import { educationInstitute } from '../../Models/Interfaces/educationInstitue';
@Component({
  selector: 'app-education-institute-popup',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './education-institute-popup.component.html',
  styleUrl: './education-institute-popup.component.scss'
})
export class EducationInstitutePopupComponent {
  public authForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private http: HttpClient, private educationInstituteService: EducationInstituteService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    this.authForm = this.formBuilder.group({
        name: this.formBuilder.control('', [Validators.required]),
        address: this.formBuilder.control('', [Validators.required]),
        postalCode: this.formBuilder.control('', [Validators.required]),
    });
  }

  createEducationInstitute() {
      
      const {
        name,
        address,
        postalCode
      } = this.authForm.value;
      
      this.educationInstituteService.createEducationInstitute(this.authForm.value).subscribe(
        (educationInstitute: educationInstitute) => {
          Swal.fire({
            title: 'Success!',
            text: ` ${educationInstitute.name} is created.`,
            icon: 'success',
            confirmButtonText: 'OK',
          });
  
        },(_error) => {
          Swal.fire({
            title: 'Error!',
            text: `Authentication failed. Try again`,
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      )
  }
}
