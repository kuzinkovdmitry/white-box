import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const PRIMENG_MODULES = [
  MenubarModule
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ...PRIMENG_MODULES
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ...PRIMENG_MODULES
  ]
})
export class SharedModule { }
