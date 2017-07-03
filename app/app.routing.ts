import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user.component';
// import {AboutComponent} from './components/about.component';
import {AboutAppComponent} from './components/aboutApp.component';
import {EndUserComponent} from './components/endUser.component';

const appRoutes: Routes = [
	{
		path: '',
		component: UserComponent
	// },{
	// 	path: 'about',
	// 	component: AboutComponent
	},{	
		path: 'aboutApp',
		component: AboutAppComponent
	},{
		path: 'endUsers',
		component: EndUserComponent
	}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);