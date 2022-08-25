import { Component } from '@angular/core';

@Component({
  selector: 'wb-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent {
  public domains: string[] = ['Retail', 'Logistics', 'Medical', 'FinTech', 'Blockchain', 'Cybersecurity'];
  public technologies: string[] = ['Web&Mobile', '.NET', 'Blockchain ', 'JS'];

}
