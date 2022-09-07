import { Injectable } from '@angular/core';
import { EMenuIds } from '../enums/menu-ids.enum';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private readonly SCROLL_OFFSET = 60;

  public scrollToElement(id: EMenuIds): void {
    let topCoordinate = 0;
    if (id !== EMenuIds.Home) {
      const { top } = document.getElementById(id).getBoundingClientRect();
      const currentScroll = document.documentElement.scrollTop;
      topCoordinate = currentScroll + top - this.SCROLL_OFFSET;
    }
    window.scroll({ top: topCoordinate, behavior: 'smooth'});
  }

}
