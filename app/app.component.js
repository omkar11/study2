System.register(['angular2/core', './contact/contact-list.component', './contact/newcontact.component', './schedular/schedular.component', "angular2/router", "./GETPOST/httpgetpost.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contact_list_component_1, newcontact_component_1, schedular_component_1, router_1, router_2, httpgetpost_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_list_component_1_1) {
                contact_list_component_1 = contact_list_component_1_1;
            },
            function (newcontact_component_1_1) {
                newcontact_component_1 = newcontact_component_1_1;
            },
            function (schedular_component_1_1) {
                schedular_component_1 = schedular_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (httpgetpost_component_1_1) {
                httpgetpost_component_1 = httpgetpost_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n            <header> \n                <nav>\n                    <a [routerLink] = \"['Contacts']\"> Contacts </a>\n                    <a [routerLink] = \"['NewContacts']\"> New Contacts </a>\n                    <a [routerLink] = \"['Schedular']\"> Schedule Appointment </a>\n                    <a [routerLink] = \"['HTTPGetPost']\"> GET POST </a>\n                    \n                    \n                </nav>\n            </header>\n                \n                <div class=\"main\">\n                    <router-outlet></router-outlet>\n                    \n                </div>\n                \n\n    ",
                        directives: [contact_list_component_1.ContactListComponent, newcontact_component_1.NewContactComponent, router_1.ROUTER_DIRECTIVES, schedular_component_1.Schedular, httpgetpost_component_1.HTTPGetPost],
                        styleUrls: ['src/css/app.css'],
                    }),
                    router_2.RouteConfig([
                        { path: '/contacts', name: 'Contacts', component: contact_list_component_1.ContactListComponent, useAsDefault: true },
                        { path: '/newcontacts', name: 'NewContacts', component: newcontact_component_1.NewContactComponent },
                        { path: '/schedular', name: 'Schedular', component: schedular_component_1.Schedular },
                        { path: '/getpost', name: 'HTTPGetPost', component: httpgetpost_component_1.HTTPGetPost }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaURBO2dCQUFBO2dCQUVBLENBQUM7Z0JBdkNEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsUUFBUSxFQUFFLG1uQkFrQlQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsNkNBQW9CLEVBQUUsMENBQW1CLEVBQUUsMEJBQWlCLEVBQUMsK0JBQVMsRUFBRSxtQ0FBVyxDQUFDO3dCQUNqRyxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztxQkFDakMsQ0FBQztvQkFJRCxvQkFBVyxDQUFDO3dCQUVMLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBRSxZQUFZLEVBQUMsSUFBSSxFQUFDO3dCQUN6RixFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsMENBQW1CLEVBQUM7d0JBQzNFLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSwrQkFBUyxFQUFDO3dCQUM3RCxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsbUNBQVcsRUFBQztxQkFHbEUsQ0FBQzs7Z0NBQUE7Z0JBSU4sbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q29udGFjdExpc3RDb21wb25lbnR9IGZyb20gJy4vY29udGFjdC9jb250YWN0LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7TmV3Q29udGFjdENvbXBvbmVudH0gZnJvbSAnLi9jb250YWN0L25ld2NvbnRhY3QuY29tcG9uZW50JztcbmltcG9ydCB7U2NoZWR1bGFyfSBmcm9tICcuL3NjaGVkdWxhci9zY2hlZHVsYXIuY29tcG9uZW50JztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVDb25maWd9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7SFRUUEdldFBvc3R9IGZyb20gXCIuL0dFVFBPU1QvaHR0cGdldHBvc3QuY29tcG9uZW50XCI7XG5cblxuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgICAgICA8aGVhZGVyPiBcbiAgICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua10gPSBcIlsnQ29udGFjdHMnXVwiPiBDb250YWN0cyA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXSA9IFwiWydOZXdDb250YWN0cyddXCI+IE5ldyBDb250YWN0cyA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXSA9IFwiWydTY2hlZHVsYXInXVwiPiBTY2hlZHVsZSBBcHBvaW50bWVudCA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXSA9IFwiWydIVFRQR2V0UG9zdCddXCI+IEdFVCBQT1NUIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcblxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW0NvbnRhY3RMaXN0Q29tcG9uZW50LCBOZXdDb250YWN0Q29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFUyxTY2hlZHVsYXIsIEhUVFBHZXRQb3N0XSxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy9hcHAuY3NzJ10sXG59KVxuXG5cblxuQFJvdXRlQ29uZmlnKFtcbiAgICAgICAgICAgIFxuICAgICAgICB7cGF0aDogJy9jb250YWN0cycsIG5hbWU6ICdDb250YWN0cycsIGNvbXBvbmVudDogQ29udGFjdExpc3RDb21wb25lbnQsIHVzZUFzRGVmYXVsdDp0cnVlfSxcbiAgICAgICAge3BhdGg6ICcvbmV3Y29udGFjdHMnLCBuYW1lOiAnTmV3Q29udGFjdHMnLCBjb21wb25lbnQ6IE5ld0NvbnRhY3RDb21wb25lbnR9LFxuICAgICAgICB7cGF0aDogJy9zY2hlZHVsYXInLCBuYW1lOiAnU2NoZWR1bGFyJywgY29tcG9uZW50OiBTY2hlZHVsYXJ9LFxuICAgICAgICB7cGF0aDogJy9nZXRwb3N0JywgbmFtZTogJ0hUVFBHZXRQb3N0JywgY29tcG9uZW50OiBIVFRQR2V0UG9zdH1cblxuXG4gICAgXSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cdFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
