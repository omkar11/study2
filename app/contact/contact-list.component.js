System.register(['angular2/core', './contactdetail.component', './contact.service'], function(exports_1, context_1) {
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
    var core_1, contactdetail_component_1, contact_service_1;
    var ContactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contactdetail_component_1_1) {
                contactdetail_component_1 = contactdetail_component_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            ContactListComponent = (function () {
                function ContactListComponent(_contactService) {
                    this._contactService = _contactService;
                    this.selectedContact = null;
                }
                ContactListComponent.prototype.onSelect = function (contact) {
                    console.log(contact);
                    this.selectedContact = contact;
                };
                ContactListComponent.prototype.getContacts = function () {
                    var _this = this;
                    this._contactService.getContacts().then(function (contacts) { return _this.contactarray = contacts; });
                };
                ContactListComponent.prototype.ngOnInit = function () {
                    this.getContacts();
                };
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-list',
                        template: "\n\t\t\t\t\n\t\t\t\t<ul> \n\t\t\t\t\t<li *ngFor=\"#contact of contactarray\" (click)=\"onSelect(contact)\" \t\n\t\t\t\t\t[class.is-awesome] = \"selectedContact=== contact\"\n\t\t\t\t> {{contact.firstName}} {{contact.lastName}}\n\t\t\t\t\t</li></ul>\n\n\n\t\t\t\t\t<!--This is how you pass the parameter from parent component to child Component -->\n\t\t\t\t\t<contact-detail *ngIf=\"selectedContact !==null\"[contact] = \"selectedContact\"></contact-detail>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t",
                        directives: [contactdetail_component_1.ContactDetailComponent],
                        providers: [contact_service_1.ContactService],
                        styleUrls: ['src/css/contact-list.css']
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService])
                ], ContactListComponent);
                return ContactListComponent;
            }());
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QvY29udGFjdC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQStCQTtnQkFNQyw4QkFBcUIsZUFBK0I7b0JBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtvQkFLN0Msb0JBQWUsR0FBQyxJQUFJLENBQUM7Z0JBSDVCLENBQUM7Z0JBTUEsdUNBQVEsR0FBUixVQUFTLE9BQU87b0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRXJCLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO2dCQUMvQixDQUFDO2dCQUlGLDBDQUFXLEdBQVg7b0JBQUEsaUJBSUM7b0JBRkEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFtQixJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBRyxRQUFRLEVBQTVCLENBQTRCLENBQUMsQ0FBQztnQkFFaEcsQ0FBQztnQkFFRCx1Q0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQztnQkF0REY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLGlmQWNUO3dCQUVELFVBQVUsRUFBRSxDQUFDLGdEQUFzQixDQUFDO3dCQUNwQyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO3dCQUMzQixTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztxQkFFdkMsQ0FBQzs7d0NBQUE7Z0JBaUNGLDJCQUFDO1lBQUQsQ0EvQkEsQUErQkMsSUFBQTtZQS9CRCx1REErQkMsQ0FBQSIsImZpbGUiOiJjb250YWN0L2NvbnRhY3QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NvbnRhY3REZXRhaWxDb21wb25lbnR9IGZyb20gJy4vY29udGFjdGRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb250YWN0U2VydmljZX0gZnJvbSAnLi9jb250YWN0LnNlcnZpY2UnO1xuaW1wb3J0IHtDb250YWN0fSBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbnRhY3QtbGlzdCcsXG5cdHRlbXBsYXRlOiBgXG5cdFx0XHRcdFxuXHRcdFx0XHQ8dWw+IFxuXHRcdFx0XHRcdDxsaSAqbmdGb3I9XCIjY29udGFjdCBvZiBjb250YWN0YXJyYXlcIiAoY2xpY2spPVwib25TZWxlY3QoY29udGFjdClcIiBcdFxuXHRcdFx0XHRcdFtjbGFzcy5pcy1hd2Vzb21lXSA9IFwic2VsZWN0ZWRDb250YWN0PT09IGNvbnRhY3RcIlxuXHRcdFx0XHQ+IHt7Y29udGFjdC5maXJzdE5hbWV9fSB7e2NvbnRhY3QubGFzdE5hbWV9fVxuXHRcdFx0XHRcdDwvbGk+PC91bD5cblxuXG5cdFx0XHRcdFx0PCEtLVRoaXMgaXMgaG93IHlvdSBwYXNzIHRoZSBwYXJhbWV0ZXIgZnJvbSBwYXJlbnQgY29tcG9uZW50IHRvIGNoaWxkIENvbXBvbmVudCAtLT5cblx0XHRcdFx0XHQ8Y29udGFjdC1kZXRhaWwgKm5nSWY9XCJzZWxlY3RlZENvbnRhY3QgIT09bnVsbFwiW2NvbnRhY3RdID0gXCJzZWxlY3RlZENvbnRhY3RcIj48L2NvbnRhY3QtZGV0YWlsPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcblx0YCxcblx0XG5cdGRpcmVjdGl2ZXM6IFtDb250YWN0RGV0YWlsQ29tcG9uZW50XSxcblx0cHJvdmlkZXJzOiBbQ29udGFjdFNlcnZpY2VdLFxuXHRzdHlsZVVybHM6IFsnc3JjL2Nzcy9jb250YWN0LWxpc3QuY3NzJ11cblx0XG59KVxuXG5leHBvcnQgY2xhc3MgQ29udGFjdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cblxucHVibGljIGNvbnRhY3RhcnJheTogQ29udGFjdCBbXTtcblx0XG5cblx0Y29uc3RydWN0b3IgKHByaXZhdGUgX2NvbnRhY3RTZXJ2aWNlOiBDb250YWN0U2VydmljZSl7XG5cblx0fVxuXG5cblx0cHVibGljIHNlbGVjdGVkQ29udGFjdD1udWxsO1xuXG5cblx0XHRvblNlbGVjdChjb250YWN0KXtcblx0XHRjb25zb2xlLmxvZyhjb250YWN0KTtcblxuXHRcdHRoaXMuc2VsZWN0ZWRDb250YWN0ID0gY29udGFjdDtcblx0XHR9XG5cblxuXG5cdGdldENvbnRhY3RzKCl7XG5cdFx0XG5cdFx0dGhpcy5fY29udGFjdFNlcnZpY2UuZ2V0Q29udGFjdHMoKS50aGVuKChjb250YWN0czogQ29udGFjdFtdKSA9PiB0aGlzLmNvbnRhY3RhcnJheSA9IGNvbnRhY3RzKTtcblxuXHR9XG5cblx0bmdPbkluaXQoKTphbnl7XG5cdFx0dGhpcy5nZXRDb250YWN0cygpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
