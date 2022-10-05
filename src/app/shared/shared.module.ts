import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { OutsideClickDirective } from './directives/outside-click.directive';
import { AnimateDirective } from './directives/animate.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    OutsideClickDirective,
    SpinnerComponent,
    AnimateDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    OutsideClickDirective,
    AnimateDirective
  ]
})
export class SharedModule { }
