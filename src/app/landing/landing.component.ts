import { Component } from '@angular/core';
import { EMenuIds } from 'src/app/enums/menu-ids.enum';

@Component({
  selector: 'wb-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  public menuIds = EMenuIds;

}
