import { Component } from '@angular/core';
import { EMenuIds } from 'src/app/enums/menu-ids.enum';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'wb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private commonService: CommonService,
  ) {}

  public scrollToServicesBlock(): void {
    this.commonService.scrollToElement(EMenuIds.Services);
  }

}
