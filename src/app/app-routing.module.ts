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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
