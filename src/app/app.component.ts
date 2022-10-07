import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { CommonUtils } from './utils/common.utils';

@Component({
  selector: 'wb-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  constructor(
    private meta: Meta
  ) {}

  ngOnInit(): void {
    if (CommonUtils.isIOS()) {
      this.setViewportTag();
    }
  }

  private setViewportTag(): void {
    const viewportContent = this.meta.getTag("name='viewport'").content;
    this.meta.updateTag({
      name: 'viewport',
      content: `${viewportContent}, maximum-scale=1`
    });
  }

}
