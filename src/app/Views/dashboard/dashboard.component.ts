import { JobOfferService } from './../../Services/JobOffer/job-offer.service';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { TableComponent } from "../../Components/table/table.component";
import { JobOffer } from '../../Models/Interfaces/JobOffer';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../../Models/Interfaces/Company';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [NavbarComponent, FooterComponent, TableComponent,CommonModule]
})
export class DashboardComponent implements OnInit{

    public company: Company | undefined;
    public jobOffers: JobOffer[] = [];

    constructor(private jobOfferService: JobOfferService,private route: ActivatedRoute,private router: Router){}

    ngOnInit(): void {
      this.isAdminLoggedIn();
    }

    isAdminLoggedIn(): any {
      const isAdminLoggedIn = localStorage.getItem('admin_access_token') !== null;
      if (!isAdminLoggedIn) {
        this.router.navigate(['/auth']);
      }
    }

}
