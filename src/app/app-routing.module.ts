import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('../routes/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'blog', loadChildren: () => import('../routes/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'docs', loadChildren: () => import('../routes/docs-home/docs-home.module').then(m => m.DocsHomeModule)
  },
  {
    path: 'support', loadChildren: () => import('../routes/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'products', loadChildren: () => import('../routes/products/products.module').then(m => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
