import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class EndUserService {
	constructor(private http: Http){
		}

		getEndUser(){
		return this.http.get('https://jsonplaceholder.typicode.com/users')
			.map(res => res.json());
	}
}
