import {Component} from 'angular2/core';
import {ContactService} from './contact.service';
import {Contact} from './contact';
import {Router} from "angular2/router";
@Component({
	template: `	
		<div>
			<label for="first-name"> First Name: </label>
			<input type= "text" id="first-name" #firstName>
		</div>
		<div>
			<label for="last-name"> Last Name: </label>
			<input type= "text" id="last-name" #lastName>
		</div>
		<div>
			<label for="phone"> Phone Number: </label>
			<input type= "text" id="phone" #phone>
		</div>
		<div>
			<label for="email"> E-Mail: </label>
			<input type= "text" id="email" #email>
		</div>
		<button (click)="onAddContact(firstName.value, lastName.value, phone.value, email.value)" > Create Contact</button>
	`,

	providers: [ContactService],
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

export class NewContactComponent{


	constructor(private _contactService : ContactService, private router: Router){}


	onAddContact(firstName, lastName, phone, email){
		
		
		const dummyContact = {firstName: "dummy", lastName: "contact", phone:"", email:""};

		let contact: Contact = {firstName: firstName, lastName: lastName, phone:phone, email:email};

		console.log(lastName);
		this._contactService.insertContact(contact);
		this.router.navigate(['Contacts']);
	}
	
}