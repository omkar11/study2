System.register(['angular2/core', './contact.service', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, contact_service_1, router_1;
    var NewContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NewContactComponent = (function () {
                function NewContactComponent(_contactService, router) {
                    this._contactService = _contactService;
                    this.router = router;
                }
                NewContactComponent.prototype.onAddContact = function (firstName, lastName, phone, email) {
                    var dummyContact = { firstName: "dummy", lastName: "contact", phone: "", email: "" };
                    var contact = { firstName: firstName, lastName: lastName, phone: phone, email: email };
                    console.log(lastName);
                    this._contactService.insertContact(contact);
                    this.router.navigate(['Contacts']);
                };
                NewContactComponent = __decorate([
                    core_1.Component({
                        template: "\t\n\t\t<div>\n\t\t\t<label for=\"first-name\"> First Name: </label>\n\t\t\t<input type= \"text\" id=\"first-name\" #firstName>\n\t\t</div>\n\t\t<div>\n\t\t\t<label for=\"last-name\"> Last Name: </label>\n\t\t\t<input type= \"text\" id=\"last-name\" #lastName>\n\t\t</div>\n\t\t<div>\n\t\t\t<label for=\"phone\"> Phone Number: </label>\n\t\t\t<input type= \"text\" id=\"phone\" #phone>\n\t\t</div>\n\t\t<div>\n\t\t\t<label for=\"email\"> E-Mail: </label>\n\t\t\t<input type= \"text\" id=\"email\" #email>\n\t\t</div>\n\t\t<button (click)=\"onAddContact(firstName.value, lastName.value, phone.value, email.value)\" > Create Contact</button>\n\t",
                        providers: [contact_service_1.ContactService],
                        styles: ["\n\t\tlabel{\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 140px;\n\t\t}\n\t\tinput{\n\t\t\twidth: 250px;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router])
                ], NewContactComponent);
                return NewContactComponent;
            }());
            exports_1("NewContactComponent", NewContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QvbmV3Y29udGFjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQ0E7Z0JBR0MsNkJBQW9CLGVBQWdDLEVBQVUsTUFBYztvQkFBeEQsb0JBQWUsR0FBZixlQUFlLENBQWlCO29CQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7Z0JBQUUsQ0FBQztnQkFHL0UsMENBQVksR0FBWixVQUFhLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUs7b0JBRzdDLElBQU0sWUFBWSxHQUFHLEVBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBQyxFQUFFLEVBQUUsS0FBSyxFQUFDLEVBQUUsRUFBQyxDQUFDO29CQUVuRixJQUFJLE9BQU8sR0FBWSxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxLQUFLLEVBQUMsQ0FBQztvQkFFNUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFqREY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUscW9CQWtCVDt3QkFFRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO3dCQUMzQixNQUFNLEVBQUUsQ0FBQyxvSEFRUixDQUFDO3FCQUNGLENBQUM7O3VDQUFBO2dCQW9CRiwwQkFBQztZQUFELENBbEJBLEFBa0JDLElBQUE7WUFsQkQscURBa0JDLENBQUEiLCJmaWxlIjoiY29udGFjdC9uZXdjb250YWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q29udGFjdFNlcnZpY2V9IGZyb20gJy4vY29udGFjdC5zZXJ2aWNlJztcbmltcG9ydCB7Q29udGFjdH0gZnJvbSAnLi9jb250YWN0JztcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcdFxuXHRcdDxkaXY+XG5cdFx0XHQ8bGFiZWwgZm9yPVwiZmlyc3QtbmFtZVwiPiBGaXJzdCBOYW1lOiA8L2xhYmVsPlxuXHRcdFx0PGlucHV0IHR5cGU9IFwidGV4dFwiIGlkPVwiZmlyc3QtbmFtZVwiICNmaXJzdE5hbWU+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdj5cblx0XHRcdDxsYWJlbCBmb3I9XCJsYXN0LW5hbWVcIj4gTGFzdCBOYW1lOiA8L2xhYmVsPlxuXHRcdFx0PGlucHV0IHR5cGU9IFwidGV4dFwiIGlkPVwibGFzdC1uYW1lXCIgI2xhc3ROYW1lPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXY+XG5cdFx0XHQ8bGFiZWwgZm9yPVwicGhvbmVcIj4gUGhvbmUgTnVtYmVyOiA8L2xhYmVsPlxuXHRcdFx0PGlucHV0IHR5cGU9IFwidGV4dFwiIGlkPVwicGhvbmVcIiAjcGhvbmU+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdj5cblx0XHRcdDxsYWJlbCBmb3I9XCJlbWFpbFwiPiBFLU1haWw6IDwvbGFiZWw+XG5cdFx0XHQ8aW5wdXQgdHlwZT0gXCJ0ZXh0XCIgaWQ9XCJlbWFpbFwiICNlbWFpbD5cblx0XHQ8L2Rpdj5cblx0XHQ8YnV0dG9uIChjbGljayk9XCJvbkFkZENvbnRhY3QoZmlyc3ROYW1lLnZhbHVlLCBsYXN0TmFtZS52YWx1ZSwgcGhvbmUudmFsdWUsIGVtYWlsLnZhbHVlKVwiID4gQ3JlYXRlIENvbnRhY3Q8L2J1dHRvbj5cblx0YCxcblxuXHRwcm92aWRlcnM6IFtDb250YWN0U2VydmljZV0sXG5cdHN0eWxlczogW2Bcblx0XHRsYWJlbHtcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdHdpZHRoOiAxNDBweDtcblx0XHR9XG5cdFx0aW5wdXR7XG5cdFx0XHR3aWR0aDogMjUwcHg7XG5cdFx0fVxuXHRgXVxufSlcblxuZXhwb3J0IGNsYXNzIE5ld0NvbnRhY3RDb21wb25lbnR7XG5cblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb250YWN0U2VydmljZSA6IENvbnRhY3RTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKXt9XG5cblxuXHRvbkFkZENvbnRhY3QoZmlyc3ROYW1lLCBsYXN0TmFtZSwgcGhvbmUsIGVtYWlsKXtcblx0XHRcblx0XHRcblx0XHRjb25zdCBkdW1teUNvbnRhY3QgPSB7Zmlyc3ROYW1lOiBcImR1bW15XCIsIGxhc3ROYW1lOiBcImNvbnRhY3RcIiwgcGhvbmU6XCJcIiwgZW1haWw6XCJcIn07XG5cblx0XHRsZXQgY29udGFjdDogQ29udGFjdCA9IHtmaXJzdE5hbWU6IGZpcnN0TmFtZSwgbGFzdE5hbWU6IGxhc3ROYW1lLCBwaG9uZTpwaG9uZSwgZW1haWw6ZW1haWx9O1xuXG5cdFx0Y29uc29sZS5sb2cobGFzdE5hbWUpO1xuXHRcdHRoaXMuX2NvbnRhY3RTZXJ2aWNlLmluc2VydENvbnRhY3QoY29udGFjdCk7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydDb250YWN0cyddKTtcblx0fVxuXHRcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
