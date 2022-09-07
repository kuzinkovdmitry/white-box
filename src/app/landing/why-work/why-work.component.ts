import { Component } from '@angular/core';
import { EMenuIds } from 'src/app/enums/menu-ids.enum';
import { IReason } from 'src/app/interfaces';

@Component({
  selector: 'wb-why-work',
  templateUrl: './why-work.component.html',
  styleUrls: ['./why-work.component.scss']
})
export class WhyWorkComponent {
  public reasons: IReason[] = [
    { area: 'companies', label: '15+ companies' },
    { area: 'hours', label: '20000+ hours  implemented' },
    { area: 'employees', label: '2000+  employees' },
    { area: 'effective', label: 'Reliable and cost effective' },
    { area: 'reputation', label: 'Reputation care' },
    { area: 'technologies', label: 'We excel at all required technologies' }
  ];
  public menuIds = EMenuIds;

}
