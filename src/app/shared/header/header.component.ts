import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'wb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public menuItems: MenuItem[] = [
    { label: 'Home' },
    { label: 'About Us' },
    { label: 'Service' },
    {
      label: 'Cases',
      items: [
        { label: 'ETOODLE' },
        { label: 'ONEKOPI' },
        { label: 'JUKE' },
        { label: 'BENDIGO' }
      ]
    },
    { label: 'Management' }
  ];

  constructor() { }

}
