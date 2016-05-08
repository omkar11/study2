System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ContactDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ContactDetailComponent = (function () {
                function ContactDetailComponent() {
                    this.contact = {};
                }
                ContactDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-detail',
                        template: "\t\n\t<div>\n\t<label for= \"first-name\"> First name: </label>\n\t<input [(ngModel)] = contact.firstName> \n\t</div>\t\n\n\t<div>\n\t<label for= \"last-name\">Last Name: </label>\n\t<input [(ngModel)] = contact.lastName> \n\t</div>\t\n\t\n\t<div>\n\t<label for= \"phone\">Phone Number: </label>\n\t <input [(ngModel)] = contact.phone> \n\t</div>\t\n\n\t<div>\n\t<label for= \"email\">E-mail:  </label>\n\t<input [(ngModel)] = contact.email>\n\t</div>\t\n\t\t\t\n\n\n\n\t\t\t\t<div>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\tFirst Name: {{contact.firstName}}  <br>\n\t\t\t\tLast Name: {{contact.lastName}}  <br>\n\t\t\t\tPhone Number: {{contact.phone}}  <br>\n\t\t\t\tE-mail: {{contact.email}}</div>\n\t",
                        inputs: ["contact"],
                        styles: ["\n\t\tlabel{\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 140px;\n\t\t}\n\t\tinput{\n\t\t\twidth: 250px;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactDetailComponent);
                return ContactDetailComponent;
            }());
            exports_1("ContactDetailComponent", ContactDetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QvY29udGFjdGRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxREE7Z0JBQUE7b0JBRVEsWUFBTyxHQUFHLEVBQUUsQ0FBQztnQkFFckIsQ0FBQztnQkF2REQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsMHNCQWdDVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBRW5CLE1BQU0sRUFBRSxDQUFDLG9IQVFSLENBQUM7cUJBSUYsQ0FBQzs7MENBQUE7Z0JBTUYsNkJBQUM7WUFBRCxDQUpBLEFBSUMsSUFBQTtZQUpELDJEQUlDLENBQUEiLCJmaWxlIjoiY29udGFjdC9jb250YWN0ZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udGFjdC1kZXRhaWwnLFxuXHR0ZW1wbGF0ZTogYFx0XG5cdDxkaXY+XG5cdDxsYWJlbCBmb3I9IFwiZmlyc3QtbmFtZVwiPiBGaXJzdCBuYW1lOiA8L2xhYmVsPlxuXHQ8aW5wdXQgWyhuZ01vZGVsKV0gPSBjb250YWN0LmZpcnN0TmFtZT4gXG5cdDwvZGl2Plx0XG5cblx0PGRpdj5cblx0PGxhYmVsIGZvcj0gXCJsYXN0LW5hbWVcIj5MYXN0IE5hbWU6IDwvbGFiZWw+XG5cdDxpbnB1dCBbKG5nTW9kZWwpXSA9IGNvbnRhY3QubGFzdE5hbWU+IFxuXHQ8L2Rpdj5cdFxuXHRcblx0PGRpdj5cblx0PGxhYmVsIGZvcj0gXCJwaG9uZVwiPlBob25lIE51bWJlcjogPC9sYWJlbD5cblx0IDxpbnB1dCBbKG5nTW9kZWwpXSA9IGNvbnRhY3QucGhvbmU+IFxuXHQ8L2Rpdj5cdFxuXG5cdDxkaXY+XG5cdDxsYWJlbCBmb3I9IFwiZW1haWxcIj5FLW1haWw6ICA8L2xhYmVsPlxuXHQ8aW5wdXQgWyhuZ01vZGVsKV0gPSBjb250YWN0LmVtYWlsPlxuXHQ8L2Rpdj5cdFxuXHRcdFx0XG5cblxuXG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdDxicj5cblx0XHRcdFx0PGJyPlxuXHRcdFx0XHQ8YnI+XG5cdFx0XHRcdEZpcnN0IE5hbWU6IHt7Y29udGFjdC5maXJzdE5hbWV9fSAgPGJyPlxuXHRcdFx0XHRMYXN0IE5hbWU6IHt7Y29udGFjdC5sYXN0TmFtZX19ICA8YnI+XG5cdFx0XHRcdFBob25lIE51bWJlcjoge3tjb250YWN0LnBob25lfX0gIDxicj5cblx0XHRcdFx0RS1tYWlsOiB7e2NvbnRhY3QuZW1haWx9fTwvZGl2PlxuXHRgLFxuXHRpbnB1dHM6IFtcImNvbnRhY3RcIl0sXG5cdFxuXHRzdHlsZXM6IFtgXG5cdFx0bGFiZWx7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHR3aWR0aDogMTQwcHg7XG5cdFx0fVxuXHRcdGlucHV0e1xuXHRcdFx0d2lkdGg6IDI1MHB4O1xuXHRcdH1cblx0YF1cblx0XG5cdFxuXHRcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb250YWN0RGV0YWlsQ29tcG9uZW50e1xuXG5cdHB1YmxpYyBjb250YWN0ID0ge307XG5cdFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
