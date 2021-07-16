import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//
import { DotBgModule } from '../../components/dot-bg/dot-bg.module';
//
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './routes/search/search.component';
import { PageComponent } from './routes/page/page.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { ItemComponent } from './components/item/item.component';
import { LikeComponent } from './components/like/like.component';



@NgModule({
  declarations: [
    ViewComponent,
    SearchComponent,
    PageComponent,
    SearchInputComponent,
    HeaderComponent,
    IntroComponent,
    ItemComponent,
    LikeComponent
  ],
  imports: [
    CommonModule,
    DotBgModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewComponent,
        children: [
          {
            path: '',
            component: SearchComponent
          },
          {
            path: ':id',
            component: PageComponent
          }
        ]
      }
    ])
  ]
})
export class SupportModule { }
