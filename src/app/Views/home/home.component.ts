import { Component } from '@angular/core';
import { FooterComponent } from '../../Components/footer/footer.component';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { FeaturesComponent } from '../../Components/features/features.component';
import { TestimonialsComponent } from '../../Components/testimonials/testimonials.component';
import { ContactusComponent } from '../../Components/contactus/contactus.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: 
    [FooterComponent,
    NavbarComponent,
    FeaturesComponent,
    TestimonialsComponent,
    ContactusComponent
]
})
export class HomeComponent {

}
