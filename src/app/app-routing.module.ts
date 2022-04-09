import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent }   from './about/about.component';
import { VoteComponent }   from './vote/vote.component';
import { ExploreComponent }   from './explore/explore.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/vote',
		pathMatch: 'full'
	},
	{
		path: 'vote',
		component: VoteComponent,
		data: {title: "Vote | deVoted"}
	},
	{
		path: 'explore',
		component: ExploreComponent,
		data: {title: "Explore | deVoted"}
	},
	{
		path: 'about',
		component: AboutComponent,
		data: {title: "About | deVoted"}
	},    
    {
		path: '**',
		component: PageNotFoundComponent,
		data: {title: "404 | deVoted"}
	}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}