import { Component, Inject } from '@angular/core';
import { IMenuItem } from 'src/app/interfaces';
import { DOCUMENT } from '@angular/common';
import { CasesService } from 'src/app/services/cases.service';

@Component({
  selector: 'wb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   // TODO: fix it;
  private readonly SCROLL_INDENT = 130;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private casesService: CasesService
  ) {}

  public menuItems: IMenuItem[] = [
    { id: 'menuHome', label: 'Home', expanded: false },
    { id: 'menuAbout', label: 'About Us', expanded: false },
    { id: 'menuServices', label: 'Services', expanded: false },
    {
      id: 'menuCases',
      label: 'Cases',
      children: [
        { id: 1, label: 'Etoodle' },
        { id: 2, label: 'OneKopi' },
        { id: 3, label: 'Juke' },
        { id: 4, label: 'Bendigo' }
      ],
      expanded: false
    },
    { id: 'menuManagement', label: 'Management', expanded: false }
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
    this.scrollToBlock(item.id);
  }

  public selectChildMenuItem(parentItem: IMenuItem, childId: number): void {
    parentItem.expanded = false;
    this.scrollToBlock(parentItem.id);
    this.casesService.emitCaseChange(childId);
  }

  public closeChildrenMenu(event: any, item: IMenuItem): void {
    const expandedItem = this.menuItems.find((menuItem: IMenuItem) => menuItem.expanded);
    const isExpandedItemClicked = !!event.path.find((el: any) => el.id === expandedItem?.id);
    if(isExpandedItemClicked) {
      return;
    }
    item.expanded = false;
  }

  private scrollToBlock(id: string): void {
    const { top } = this.document.getElementById(id).getBoundingClientRect();
    const currentScroll = this.document.documentElement.scrollTop;
    window.scroll({ top: currentScroll + top - this.SCROLL_INDENT, behavior: 'smooth'});
  }

}
