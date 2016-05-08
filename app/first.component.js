System.register(['angular2/core', './contact/contact-list.component', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, contact_list_component_1, router_1, router_2;
    var FirstComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_list_component_1_1) {
                contact_list_component_1 = contact_list_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            FirstComponent = (function () {
                function FirstComponent() {
                }
                FirstComponent = __decorate([
                    core_1.Component({
                        selector: 'firstcomponent',
                        template: " \n\t\t\t\t<header> \n\t\t\t\t<nav>\n\t\t\t\t\t<a [routerLink] = \"['Contacts']\"> Contacts </a>\n\t\t\t\t\t<a [routerLink] = \"['NewContacts']\"> New Contacts </a>\n\t\t\t\t</nav>\n\t\t\t\t</header>\n\t\t\t\t\n\t\t\t\t<div class=\"main\">\n\t\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t</div>\n\n\t",
                        styleUrls: ['src/css/mycomponent.css'],
                        directives: [contact_list_component_1.ContactListComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_2.RouteConfig([
                        { path: '/contacts', name: 'Contacts', component: contact_list_component_1.ContactListComponent },
                        { path: '/newcontacts', name: 'NewContacts', component: contact_list_component_1.ContactListComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], FirstComponent);
                return FirstComponent;
            }());
            exports_1("FirstComponent", FirstComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQ0E7Z0JBQUE7Z0JBR0EsQ0FBQztnQkE1QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsa1RBWVQ7d0JBQ0QsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7d0JBQ3RDLFVBQVUsRUFBRSxDQUFDLDZDQUFvQixFQUFFLDBCQUFpQixDQUFDO3FCQUVyRCxDQUFDO29CQUVELG9CQUFXLENBQUM7d0JBQ1gsRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDZDQUFvQixFQUFDO3dCQUNyRSxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUM7cUJBQzNFLENBQUM7O2tDQUFBO2dCQUtILHFCQUFDO1lBQUQsQ0FIQSxBQUdDLElBQUE7WUFIRCwyQ0FHQyxDQUFBIiwiZmlsZSI6ImZpcnN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q29udGFjdExpc3RDb21wb25lbnR9IGZyb20gJy4vY29udGFjdC9jb250YWN0LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVDb25maWd9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcblxuXG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZmlyc3Rjb21wb25lbnQnLFxuXHR0ZW1wbGF0ZTogYCBcblx0XHRcdFx0PGhlYWRlcj4gXG5cdFx0XHRcdDxuYXY+XG5cdFx0XHRcdFx0PGEgW3JvdXRlckxpbmtdID0gXCJbJ0NvbnRhY3RzJ11cIj4gQ29udGFjdHMgPC9hPlxuXHRcdFx0XHRcdDxhIFtyb3V0ZXJMaW5rXSA9IFwiWydOZXdDb250YWN0cyddXCI+IE5ldyBDb250YWN0cyA8L2E+XG5cdFx0XHRcdDwvbmF2PlxuXHRcdFx0XHQ8L2hlYWRlcj5cblx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtYWluXCI+XG5cdFx0XHRcdFx0PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRgLFxuXHRzdHlsZVVybHM6IFsnc3JjL2Nzcy9teWNvbXBvbmVudC5jc3MnXSxcblx0ZGlyZWN0aXZlczogW0NvbnRhY3RMaXN0Q29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU11cblx0XG59KVxuXG5AUm91dGVDb25maWcoW1xuXHRcdHtwYXRoOicvY29udGFjdHMnLCBuYW1lOiAnQ29udGFjdHMnLCBjb21wb25lbnQ6IENvbnRhY3RMaXN0Q29tcG9uZW50fSxcblx0XHR7cGF0aDonL25ld2NvbnRhY3RzJywgbmFtZTogJ05ld0NvbnRhY3RzJywgY29tcG9uZW50OiBDb250YWN0TGlzdENvbXBvbmVudH1cblx0XSlcblxuZXhwb3J0IGNsYXNzIEZpcnN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
