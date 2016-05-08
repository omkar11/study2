import {Component} from 'angular2/core';

@Component({
	selector: 'contact-detail',
	template: `	
	<div>
	<label for= "first-name"> First name: </label>
	<input [(ngModel)] = contact.firstName> 
	</div>	

	<div>
	<label for= "last-name">Last Name: </label>
	<input [(ngModel)] = contact.lastName> 
	</div>	
	
	<div>
	<label for= "phone">Phone Number: </label>
	 <input [(ngModel)] = contact.phone> 
	</div>	

	<div>
	<label for= "email">E-mail:  </label>
	<input [(ngModel)] = contact.email>
	</div>	
			



				<div>
				<br>
				<br>
				<br>
				First Name: {{contact.firstName}}  <br>
				Last Name: {{contact.lastName}}  <br>
				Phone Number: {{contact.phone}}  <br>
				E-mail: {{contact.email}}</div>
	`,
	inputs: ["contact"],
	
	styles: [`
		label{
			display: inline-block;
			width: 140px;
		}
		input{
			width: 250px;
		}
	`]
	
	
	
})

export class ContactDetailComponent{

	public contact = {};
	
}