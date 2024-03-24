import { Component } from '@angular/core';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { PopupComponent } from "../../Components/popup/popup.component";
import { JobCardComponent } from '../../Components/job-card/job-card.component';


@Component({
    selector: 'app-offers',
    standalone: true,
    templateUrl: './offers.component.html',
    styleUrl: './offers.component.scss',
    imports: [ NavbarComponent, FooterComponent, PopupComponent, JobCardComponent]
})
export class OffersComponent {

}

