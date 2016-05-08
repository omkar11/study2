import {Component} from 'angular2/core';
import {ContactDetailComponent} from './contactdetail.component';
import {ContactService} from './contact.service';
import {Contact} from './contact';
import {OnInit} from 'angular2/core';


@Component({
	selector: 'contact-list',
	template: `
				
				<ul> 
					<li *ngFor="#contact of contactarray" (click)="onSelect(contact)" 	
					[class.is-awesome] = "selectedContact=== contact"
				> {{contact.firstName}} {{contact.lastName}}
					</li></ul>


					<!--This is how you pass the parameter from parent component to child Component -->
					<contact-detail *ngIf="selectedContact !==null"[contact] = "selectedContact"></contact-detail>
					
					
				
	`,
	
	directives: [ContactDetailComponent],
	providers: [ContactService],
	styleUrls: ['src/css/contact-list.css']
	
})

export class ContactListComponent implements OnInit{


public contactarray: Contact [];
	

	constructor (private _contactService: ContactService){

	}


	public selectedContact=null;


		onSelect(contact){
		console.log(contact);

		this.selectedContact = contact;
		}



	getContacts(){
		
		this._contactService.getContacts().then((contacts: Contact[]) => this.contactarray = contacts);

	}

	ngOnInit():any{
		this.getContacts();
	}
}