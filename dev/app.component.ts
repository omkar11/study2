import {Component} from 'angular2/core';
import {ContactListComponent} from './contact/contact-list.component';
import {NewContactComponent} from './contact/newcontact.component';
import {Schedular} from './schedular/schedular.component';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {HTTPGetPost} from "./GETPOST/httpgetpost.component";





@Component({
    selector: 'app',
    template: `
            <header> 
                <nav>
                    <a [routerLink] = "['Contacts']"> Contacts </a>
                    <a [routerLink] = "['NewContacts']"> New Contacts </a>
                    <a [routerLink] = "['Schedular']"> Schedule Appointment </a>
                    <a [routerLink] = "['HTTPGetPost']"> GET POST </a>
                    
                    
                </nav>
            </header>
                
                <div class="main">
                    <router-outlet></router-outlet>
                    
                </div>
                

    `,
    directives: [ContactListComponent, NewContactComponent, ROUTER_DIRECTIVES,Schedular, HTTPGetPost],
    styleUrls: ['src/css/app.css'],
})



@RouteConfig([
            
        {path: '/contacts', name: 'Contacts', component: ContactListComponent, useAsDefault:true},
        {path: '/newcontacts', name: 'NewContacts', component: NewContactComponent},
        {path: '/schedular', name: 'Schedular', component: Schedular},
        {path: '/getpost', name: 'HTTPGetPost', component: HTTPGetPost}


    ])

export class AppComponent {
	
}