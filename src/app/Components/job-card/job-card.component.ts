import { Component, OnInit } from '@angular/core';
import { JobOfferService } from '../../Services/JobOffer/job-offer.service';
import { Offer } from '../../Models/Interfaces/Offer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss'
})
export class JobCardComponent implements OnInit {
    JobOffers: Offer[] = [];
    constructor(private jobOfferService: JobOfferService) { }
  
    ngOnInit(): void {
      this.getJobOffers();
    }
    getJobOffers(){
      this.jobOfferService.getAllOffers().subscribe(
        (jobOffer: Offer[]) => {
          this.JobOffers = jobOffer;
          console.log(this.JobOffers)
        }
      );
    }


}
