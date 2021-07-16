import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//
import { ViewComponent } from './view/view.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemComponent } from './components/item/item.component';
import { IntroComponent } from './components/intro/intro.component';
import { HomeComponent } from './routes/home/home.component';
import { ProductComponent } from './routes/product/product.component';



@NgModule({
  declarations: [
    ViewComponent,
    HeaderComponent,
    ItemComponent,
    IntroComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewComponent,
        children: [
          {
            path: '',
            component: HomeComponent
          },
          {
            path: ':name',
            component: ProductComponent
          }
        ]
      }
    ])
  ]
})
export class ProductsModule { }
