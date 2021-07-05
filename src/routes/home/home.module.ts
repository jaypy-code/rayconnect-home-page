import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//
import { ViewComponent } from './view/view.component';
//
import { BoxComponent } from './components/box/box.component';
import { CodeComponent } from './components/code/code.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { MenuComponent } from './components/menu/menu.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
//
import { CodeContentComponent } from './components/code/components/code-content/code-content.component';
import { CodeDrawerComponent } from './components/code/components/code-drawer/code-drawer.component';
import { CodeDropdownComponent } from './components/code/components/code-dropdown/code-dropdown.component';
import { CodeInfoComponent } from './components/code/components/code-info/code-info.component';
import { CodeTabComponent } from './components/code/components/code-tab/code-tab.component';

@NgModule({
  declarations: [
    ViewComponent,
    BoxComponent,
    CodeComponent,
    FaqComponent,
    FooterComponent,
    HeaderComponent,
    IntroComponent,
    MenuComponent,
    SubscribeComponent,
    CodeContentComponent,
    CodeDrawerComponent,
    CodeDropdownComponent,
    CodeInfoComponent,
    CodeTabComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ViewComponent }
    ])
  ]
})
export class HomeModule { }
