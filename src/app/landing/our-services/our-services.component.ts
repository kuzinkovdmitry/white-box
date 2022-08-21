import { Component } from '@angular/core';

@Component({
  selector: 'wb-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent {
  domains = ['Retail', 'Logistics', 'Medical', 'FinTech', 'Blockchain', 'Cybersecurity'];

}
