import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { CASES } from 'src/app/data/cases';
import { ICase } from 'src/app/interfaces';
import { CAROUSEL_OPTIONS } from '../../options/carousel.options';

@Component({
  selector: 'wb-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent {
  @ViewChild('slickModal') slick: SlickCarouselComponent;

  public options = CAROUSEL_OPTIONS;
  public cases: ICase[] = CASES;
  public activeCase: ICase = this.cases[0];
  public isShowCarousel = true;

  public selectCase(item: ICase): void {
    if (item.label === this.activeCase.label) {
      item.collapsed = !item.collapsed;
      return;
    }
    this.activeCase = item;
    const hasColapsed = this.cases.some((caseItem: ICase) => caseItem.collapsed)
    this.cases = this.cases.map((caseItem: ICase) => {
      caseItem.selected = item.label === caseItem.label;
      caseItem.collapsed = hasColapsed;
      return caseItem;
    });
    this.slick.slickGoTo(0);
  }

  public trackByFn(index: number) {
    return index;
  }

}
