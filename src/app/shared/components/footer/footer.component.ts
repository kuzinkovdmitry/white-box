import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { IFooterMenuItem } from 'src/app/interfaces';

@Component({
  selector: 'wb-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  // TODO: fix it;
  private readonly SCROLL_INDENT = 130;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {}

  public menuList: IFooterMenuItem[] = [
    { id: 'menuHome', label: 'Home', key: 'home' },
    { id: 'menuServices', label: 'Service', key: 'service' },
    { id: 'menuCases', label: 'Cases', key: 'cases' },
    { id: 'menuAbout', label: 'About us', key: 'about' },
    { id: 'menuManagement', label: 'Management', key: 'management' },
    { id: 'menuContact', label: 'Contact', key: 'contact' }
  ];

  public selectMenuItem(id: string): void {
    const { top } = this.document.getElementById(id).getBoundingClientRect();
    const currentScroll = this.document.documentElement.scrollTop;
    window.scroll({ top: currentScroll + top - this.SCROLL_INDENT, behavior: 'smooth'});
  }

}
