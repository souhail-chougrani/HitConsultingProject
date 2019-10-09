import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubTableComponent } from './github-table/github-table.component';
import { ShortenerURLComponent } from './shortener-url/shortener-url.component';

const routes: Routes = [
  { path: '', redirectTo: '/github', pathMatch: 'full' },
  { path: 'github', component: GithubTableComponent },
  { path: 'shortener', component: ShortenerURLComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
