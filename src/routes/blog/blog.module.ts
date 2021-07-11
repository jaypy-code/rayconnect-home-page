import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
//
import { ViewComponent } from './view/view.component';
import { HeaderComponent } from './components/header/header.component';
import { PostComponent } from './components/post/post.component';
import { HomeComponent } from './routes/home/home.component';
import { ArticleComponent } from './routes/article/article.component';
import { VideoComponent } from './components/video/video.component';



@NgModule({
  declarations: [
    ViewComponent,
    HeaderComponent,
    PostComponent,
    HomeComponent,
    ArticleComponent,
    VideoComponent,
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
            component: HomeComponent,
          },
          {
            path: 'post/:id',
            component: ArticleComponent
          }
        ]
      }
    ])
  ]
})
export class BlogModule { }
