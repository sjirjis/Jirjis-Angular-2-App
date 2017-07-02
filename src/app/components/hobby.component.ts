import {Component}  from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hobby',
  templateUrl: './hobby.component.html'
})

export class HobbyComponent{ 
	hobbies: string[];
	showHobbies: boolean;

	constructor(){
	this.hobbies = ['Cooking', 'Home Improvement', 'Outdoors'];
	this.showHobbies = false;
	}

	toggleHobbies(){
		if(this.showHobbies){
			this.showHobbies = false;
		} else {
			this.showHobbies = true;
		}
	}

	addHobby(hobby: string){
		this.hobbies.push(hobby);
	}

	deleteHobby(i: number){
		this.hobbies.splice(i, 1);
	}
}
