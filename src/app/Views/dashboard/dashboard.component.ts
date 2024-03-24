import { JobOfferService } from './../../Services/JobOffer/job-offer.service';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { TableComponent } from "../../Components/table/table.component";
import { ActivatedRoute } from '@angular/router';
import { Company } from '../../Models/Interfaces/Company';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IndustryTableComponent } from '../../Components/industry-table/industry-table.component';
import { EducationInstituteTableComponent } from '../../Components/education-institute-table/education-institute-table.component';
import { IndustryPopupComponent } from '../../Components/industry-popup/industry-popup.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [NavbarComponent, 
              FooterComponent, 
              TableComponent,
              CommonModule,
              IndustryTableComponent,
              EducationInstituteTableComponent,
            ]
})
export class DashboardComponent implements OnInit{

    public company: Company | undefined;
    activeTable: string = ''; 

    constructor(private jobOfferService: JobOfferService,private route: ActivatedRoute,private router: Router){}


    onTableClick(tableName: string) {
      this.activeTable = tableName;
    }
    ngOnInit(): void {
      this.isAdminLoggedIn();
    }

    isAdminLoggedIn(): any {
      const isAdminLoggedIn = localStorage.getItem('admin_access_token') !== null;
      if (!isAdminLoggedIn) {
        this.router.navigate(['/auth']);
      }
    }

    logout() {
      localStorage.removeItem('admin_email');
      localStorage.removeItem('admin_access_token');
      localStorage.removeItem('admin_refresh_token');

      this.router.navigate(['/auth']);
    }

}
