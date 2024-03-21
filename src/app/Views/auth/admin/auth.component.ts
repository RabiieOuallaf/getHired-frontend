import Swal from 'sweetalert2';
import { Company } from '../../../Models/Interfaces/Company';
import { Component, OnInit} from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../../Services/Admin/admin.service';
import { Admin } from '../../../Models/Interfaces/Admin';

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  imports: [FormsModule,ReactiveFormsModule],
})
export class AuthComponent implements OnInit{
  

  public authForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private adminService: AdminService,private router: Router){}

  ngOnInit(): void {
    this.initializeForm();
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

      console.log(this.authForm.value);

      this.adminService.authentication(this.authForm.value).subscribe(
        (admin: Admin) => {
          Swal.fire({
            title: 'Success!',
            text: `Welcome ${admin.email} admin.`,
            icon: 'success',
            confirmButtonText: 'OK',
          });
          
          localStorage.setItem('admin_email', admin.email);
          localStorage.setItem('admin_role', admin.role);
          localStorage.setItem('admin_access_token', admin.accessToken ? admin.accessToken : '');
          localStorage.setItem('admin_refresh_token', admin.refreshToken ? admin.refreshToken : '');

          this.router.navigate(['/dashboard']);
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


}
