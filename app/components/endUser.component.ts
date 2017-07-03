import {Component}  from '@angular/core';
import {EndUserService} from '../services/endUser.service';

@Component({
  moduleId: module.id,
  selector: 'endUser',
  templateUrl: './endUser.component.html',
  providers: [EndUserService]
})

export class EndUserComponent{ 
	endUsers: endUser[];

	constructor(private endUserService: EndUserService){
		this.endUserService.getEndUser().subscribe(endUsers => {
			this.endUsers = endUsers;
		});
	}
}

interface endUser{
	id: number,
	name: string,
	phone: string,
	username: string,
	website: string
}