import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//
import { CodeModule } from '../../components/code/code.module';
//
import { ViewComponent } from './view/view.component';
//
import { BoxComponent } from './components/box/box.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { MenuComponent } from './components/menu/menu.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';

@NgModule({
  declarations: [
    ViewComponent,
    BoxComponent,
    FaqComponent,
    FooterComponent,
    HeaderComponent,
    IntroComponent,
    MenuComponent,
    SubscribeComponent,
  ],
  imports: [
    CommonModule,
    CodeModule,
    RouterModule.forChild([
      { path: '', component: ViewComponent }
    ])
  ]
})
export class HomeModule { }
