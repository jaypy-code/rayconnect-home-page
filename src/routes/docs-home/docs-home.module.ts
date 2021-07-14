import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//
import { DotBgModule } from '../../components/dot-bg/dot-bg.module';
//
import { ViewComponent } from './view/view.component';
import { WindowComponent } from './components/window/window.component';
import { FsComponent } from './components/fs/fs.component';
import { IntroComponent } from './components/intro/intro.component';
import { HeaderComponent } from './components/header/header.component';
import { CodeComponent } from './components/code/code.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [
    ViewComponent,
    WindowComponent,
    FsComponent,
    IntroComponent,
    HeaderComponent,
    CodeComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,
    DotBgModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewComponent
      }
    ])
  ]
})
export class DocsHomeModule { }
