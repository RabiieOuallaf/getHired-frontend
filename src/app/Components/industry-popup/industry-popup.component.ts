import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IndustryService } from '../../Services/Industry/industry.service';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Industry } from '../../Models/Interfaces/Industry';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-industry-popup',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './industry-popup.component.html',
  styleUrl: './industry-popup.component.scss'
})
export class IndustryPopupComponent {
  public authForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private http: HttpClient, private industryService: IndustryService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    this.authForm = this.formBuilder.group({
        name: this.formBuilder.control('', [Validators.required]),
    });
  }

  createIndustry() {
    
    const {
      name
    } = this.authForm.value;
    
    this.industryService.createIndustry(this.authForm.value).subscribe(
      (industry: Industry) => {
        Swal.fire({
          title: 'Success!',
          text: `Welcome ${industry.name} admin.`,
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
