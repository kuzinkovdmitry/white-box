import { Component } from '@angular/core';
import { CASES } from 'src/app/data/cases';
import { ICase } from 'src/app/interfaces';
import { CAROUSEL_OPTIONS } from '../../options/carousel.options';

@Component({
  selector: 'wb-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent {
  public options = CAROUSEL_OPTIONS;
  public cases: ICase[] = CASES;

  public items = [
    { id: '1', url: '../../../assets/img/cases/onekopi-1.png' },
    { id: '2', url: '../../../assets/img/cases/onekopi-2.png' },
    { id: '3', url: '../../../assets/img/cases/onekopi-3.png' },
    { id: '4', url: '../../../assets/img/cases/onekopi-4.png' },
    { id: '5', url: '../../../assets/img/cases/onekopi-5.png' }
  ]

}
