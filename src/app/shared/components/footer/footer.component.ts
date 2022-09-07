import { Component } from '@angular/core';
import { IFooterMenuItem } from 'src/app/interfaces';
import { EMenuIds } from 'src/app/enums/menu-ids.enum';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'wb-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(
    private commonService: CommonService
  ) {}

  public menuList: IFooterMenuItem[] = [
    { id: EMenuIds.Home, label: 'Home', key: 'home' },
    { id: EMenuIds.Services, label: 'Service', key: 'service' },
    { id: EMenuIds.Cases, label: 'Cases', key: 'cases' },
    { id: EMenuIds.About, label: 'About us', key: 'about' },
    { id: EMenuIds.Management, label: 'Management', key: 'management' },
    { id: EMenuIds.Contact, label: 'Contact', key: 'contact' }
  ];

  public selectMenuItem(id: EMenuIds): void {
    this.commonService.scrollToElement(id);
  }

}
