import {Component}  from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: './user.component.html',
})

export class UserComponent{ 
	name: string;
	email: string;
	address: address;

	constructor(){
		this.name = 'Steven Jirjis',
		this.email = 'sjirjis@gmail.com',
		this.address = {
			street: '7949 Winter View Ct.',
			city: 'El Cajon',
			state: 'CA',
			zip: 92021	
		}
	}
}

interface address{
	street: string;
	city: string;
	state: string;
	zip: number;
}

