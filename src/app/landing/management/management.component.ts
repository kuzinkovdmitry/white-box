import { Component } from '@angular/core';
import { EMenuIds } from 'src/app/enums/menu-ids.enum';
import { ITeamMember } from 'src/app/interfaces';

@Component({
  selector: 'wb-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent {
  public team: ITeamMember[] = [
    { name: 'Serhii Ivanov', photoUrl: '../../../assets/img/management/serhii.jpg' },
    { name: 'Igor Barinov', photoUrl: '../../../assets/img/management/igor.jpg' },
    { name: 'Maxim Maslennikov', photoUrl: '../../../assets/img/management/maxim.jpg' },
    { name: 'Andriy Alyeksyeyev', photoUrl: '../../../assets/img/management/andriy.jpg' }
  ];
  public menuIds = EMenuIds;

}
