import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { } from './view/view.component';
//
import { CodeContentComponent } from './components/code-content/code-content.component';
import { CodeDrawerComponent } from './components/code-drawer/code-drawer.component';
import { CodeDropdownComponent } from './components/code-dropdown/code-dropdown.component';
import { CodeInfoComponent } from './components/code-info/code-info.component';
import { CodeTabComponent } from './components/code-tab/code-tab.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    ViewComponent,
    CodeContentComponent,
    CodeDrawerComponent,
    CodeDropdownComponent,
    CodeInfoComponent,
    CodeTabComponent,
    ViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ViewComponent
  ]
})
export class CodeModule { }
