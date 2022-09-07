import { Component, HostListener } from '@angular/core';
import { IMenuItem } from 'src/app/interfaces';
import { CasesService } from 'src/app/services/cases.service';
import { EMenuIds } from 'src/app/enums/menu-ids.enum';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'wb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public menuIds = EMenuIds;
  public isMobileMenuOpened = false;
  public screenWidth = window.innerWidth;

  private readonly MEDIUM_WIDTH = 768;

  constructor(
    private commonService: CommonService,
    private casesService: CasesService
  ) {}

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
  }

  public menuItems: IMenuItem[] = [
    { id: EMenuIds.Home, label: 'Home', expanded: false },
    { id: EMenuIds.About, label: 'About Us', expanded: false },
    { id: EMenuIds.Services, label: 'Services', expanded: false },
    {
      id: EMenuIds.Cases,
      label: 'Cases',
      children: [
        { id: 1, label: 'Etoodle' },
        { id: 2, label: 'OneKopi' },
        { id: 3, label: 'Juke' },
        { id: 4, label: 'Bendigo' }
      ],
      expanded: false
    },
    { id: EMenuIds.Management, label: 'Management', expanded: false }
  ];

  public selectMenuItem(item: IMenuItem): void {
    if (item.children?.length) {
      if (item.expanded) {
        item.expanded = !item.expanded;
      } else {
        this.menuItems = this.menuItems.map((menuItem: IMenuItem) => ({...menuItem, expanded: menuItem.id === item.id}))
      }
      return;
    }
    this.setMobileMenuState(false);
    this.scrollToBlock(item.id);
  }

  public selectChildMenuItem(parentItem: IMenuItem, childId: number): void {
    parentItem.expanded = false;
    this.setMobileMenuState(false);
    this.scrollToBlock(parentItem.id);
    this.casesService.emitCaseChange(childId);
  }

  public closeChildrenMenu(event: any, item: IMenuItem): void {
    if (this.screenWidth <= this.MEDIUM_WIDTH) {
      return;
    }
    const expandedItem = this.menuItems.find((menuItem: IMenuItem) => menuItem.expanded);
    const isExpandedItemClicked = !!event.path.find((el: any) => el.dataset.menuId === expandedItem?.id);
    if (isExpandedItemClicked) {
      return;
    }
    item.expanded = false;
  }

  public scrollToBlock(id: EMenuIds): void {
    this.commonService.scrollToElement(id);
  }

  public setMobileMenuState(isOpen: boolean): void {
    this.isMobileMenuOpened = isOpen;
  }

}
