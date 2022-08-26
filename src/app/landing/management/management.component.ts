import { Component } from '@angular/core';
import { ITeamMember } from 'src/app/interfaces';

@Component({
  selector: 'wb-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent {
  public team: ITeamMember[] = [
    { name: 'Serhii Ivanov', photoUrl: '../../../assets/img/serhii.png', selected: false, data: 'SERHII DATA' },
    { name: 'Igor Barinov', photoUrl: '../../../assets/img/igor.png', selected: false, data: 'IGOR DATA' },
    { name: 'Maxim Maslennikov', photoUrl: '../../../assets/img/maxim.png', selected: false, data: 'MAXIM DATA' },
    { name: 'Andriy Alyeksyeyev', photoUrl: '../../../assets/img/andriy.png', selected: false, data: 'ANDRIY DATA' }
  ];

  public selectTeamMember(item: ITeamMember): void {
    this.team = this.team.map((teamMember: ITeamMember) => {
      teamMember.selected = teamMember.name === item.name ? !teamMember.selected : false;
      return teamMember;
    })
  }

}