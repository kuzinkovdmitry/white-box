import { Component } from '@angular/core';
import { IFooterMenuItem } from 'src/app/interfaces';

@Component({
  selector: 'wb-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public menuList: IFooterMenuItem[] = [
    { label: 'Home', key: 'home' },
    { label: 'Service', key: 'service' },
    { label: 'Cases', key: 'cases' },
    { label: 'About us', key: 'about' },
    { label: 'Management', key: 'management' },
    { label: 'Contact', key: 'contact' }
  ];

}
