import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Applicant } from '../../../Models/Interfaces/Applicants';
import { ApplicantService } from '../../../Services/Applicant/applicant.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  public authForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private applicantService: ApplicantService,private router: Router){}

  ngOnInit(): void {
    this.initializeForm();
    this.isLoggedIn();
  }

  private initializeForm() {
    this.authForm = this.formBuilder.group({
        email: this.formBuilder.control('', [Validators.required]),
        password: this.formBuilder.control('', [Validators.required]),
    });
  }

  onSubmit(){
    const {
      email,
      password
    } = this.authForm.value;

    this.applicantService.authentication(this.authForm.value).subscribe(
      (applicant: Applicant) => { 
        Swal.fire({
          title: 'Success!',
          text: `Welcome ${applicant.name} admin.`,
          icon: 'success',
          confirmButtonText: 'OK',
        });

        localStorage.setItem('applicant_email', applicant.email);
        localStorage.setItem('applicant_access_token', applicant.accessToken ?? '');
        localStorage.setItem('applicant_refresh_token', applicant.refreshToken ?? '');

        this.router.navigate(['/offers'], { state: { applicant } });
      },(_error) => {
        Swal.fire({
          title: 'Error!',
          text: `Authentication failed. Try again`,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    );
  }

  isLoggedIn() {
    localStorage.getItem('applicant_email') !== null ? this.router.navigate(['/offers']) : this.router.navigate(['/login']);
  }

  

}
