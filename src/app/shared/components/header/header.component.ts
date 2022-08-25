import { Component } from '@angular/core';
import { IMenuItem } from 'src/app/interfaces';

@Component({
  selector: 'wb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public menuItems: IMenuItem[] = [
    { id: 'menu-home', label: 'Home', expanded: false },
    { id: 'menu-about', label: 'About Us', expanded: false },
    { id: 'menu-service', label: 'Service', expanded: false },
    {
      id: 'menu-cases',
      label: 'Cases',
      children: ['ETOODLE', 'ONEKOPI', 'JUKE', 'BENDIGO'],
      expanded: false
    },
    { id: 'menu-management', label: 'Management', expanded: false }
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
  }

  public closeChildrenMenu(event: any, item: IMenuItem): void {
    const expandedItem = this.menuItems.find((menuItem: IMenuItem) => menuItem.expanded);
    const isExpandedItemClicked = !!event.path.find((el: any) => el.id === expandedItem?.id);
    if(isExpandedItemClicked) {
      return;
    }
    item.expanded = false;
  }

}
