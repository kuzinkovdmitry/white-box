import { Component } from '@angular/core';
import { ITeammate } from 'src/app/interfaces';

@Component({
  selector: 'wb-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent {
  public team: ITeammate[] = [
    { name: 'Serhii Ivanov', photoUrl: '../../../assets/img/serhii.png' },
    { name: 'Igor Barinov', photoUrl: '../../../assets/img/ihor.png' },
    { name: 'Maxim Maslennikov', photoUrl: '../../../assets/img/maxim.png' },
    { name: 'Andriy Alyeksyeyev', photoUrl: '../../../assets/img/andriy.png' }
  ];

}
