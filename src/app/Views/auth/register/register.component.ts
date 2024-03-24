import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicantService } from '../../../Services/Applicant/applicant.service';
import { Applicant } from '../../../Models/Interfaces/Applicants';
import Swal from 'sweetalert2';
import { educationInstitute } from '../../../Models/Interfaces/educationInstitue';
import { Industry } from '../../../Models/Interfaces/Industry';
import { EducationInstituteService } from '../../../Services/EducationInstitute/education-institute.service';
import { IndustryService } from '../../../Services/Industry/industry.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})

export class RegisterComponent implements OnInit{

  public EducationInstitute: educationInstitute[] = [];
  public Industry: Industry[] = [];


  constructor(
      
    private formBuilder: FormBuilder, 
    private router: Router, 
    private applicantService: ApplicantService,
    private educationInstituteService: EducationInstituteService,
    private industryService: IndustryService
    ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getEducationInstitutes();
    this.getIndustries();
  }

  public authForm!: FormGroup;

  private initializeForm() {
    this.authForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required]),
      first_name: this.formBuilder.control('', [Validators.required]),
      last_name: this.formBuilder.control('', [Validators.required]),
      birthdate: this.formBuilder.control('', [Validators.required]),
      industry_id: this.formBuilder.control('', [Validators.required]),
      education_level: this.formBuilder.control('', [Validators.required]),
      education_institute_id: this.formBuilder.control('', [
        Validators.required,
      ]),
    });
  }

  onSubmit() {
    const {
      email,
      password,
      first_name,
      last_name,
      birthdate,
      industry_id,
      education_level,
      education_institute_id
    } = this.authForm.value;
    

    this.applicantService.register(this.authForm.value).subscribe(
      (applicant: Applicant) => {
        Swal.fire({
          title: 'Success!',
          text: `Welcome ${applicant.name} admin.`,
          icon: 'success',
          confirmButtonText: 'OK',
        })

        localStorage.setItem('applicant_email', applicant.email);
        localStorage.setItem('applicant_access_token', applicant.accessToken ?? '');
        localStorage.setItem('applicant_refresh_token', applicant.refreshToken ?? '');

        this.router.navigate(['/offers'], { state: { applicant } });
      }, (_error) => {
        Swal.fire({
          title: 'Error!',
          text: `Authentication failed. Try again`,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    )
  }

  getEducationInstitutes() {
    this.educationInstituteService.getEducationInstitutes().subscribe(
      (data: educationInstitute[]) => {

        this.EducationInstitute = data;
      }
    )
  }
  
  getIndustries() {
    this.industryService.getIndustries().subscribe(
      (data: Industry[]) => {

        this.Industry = data;
      }
    )
  }
}
