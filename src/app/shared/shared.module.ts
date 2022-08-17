import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OutsideClickDirective } from './directives/outside-click.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    OutsideClickDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    OutsideClickDirective
  ]
})
export class SharedModule { }
