import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { CASES } from 'src/app/data/cases';
import { ICase } from 'src/app/interfaces';
import { CasesService } from 'src/app/services/cases.service';
import { CAROUSEL_OPTIONS } from '../../options/carousel.options';

@Component({
  selector: 'wb-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit, OnDestroy {
  @ViewChild('slickModal') slick: SlickCarouselComponent;

  public options = CAROUSEL_OPTIONS;
  public cases: ICase[] = CASES;
  public activeCase: ICase = this.cases[0];
  public isShowCarousel = true;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private casesService: CasesService
  ) {}

  ngOnInit(): void {
    this.checkCaseChanges();
  }

  public selectCase(item: ICase): void {
    if (item.id === this.activeCase.id) {
      item.collapsed = !item.collapsed;
      return;
    }
    this.activeCase = item;
    const hasColapsed = this.cases.some((caseItem: ICase) => caseItem.collapsed)
    this.cases = this.cases.map((caseItem: ICase) => {
      caseItem.selected = item.id === caseItem.id;
      caseItem.collapsed = hasColapsed;
      return caseItem;
    });
    this.slick.slickGoTo(0);
  }

  public trackByFn(index: number) {
    return index;
  }

  private checkCaseChanges(): void {
    this.casesService.onCaseChange
      .pipe(takeUntil(this.destroy$))
      .subscribe((caseId: number) => {
        const foundCase = this.cases.find((item: ICase) => item.id === caseId);
        this.selectCase(foundCase);
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
