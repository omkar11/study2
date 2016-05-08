System.register(["angular2/core", "./mock-contact"], function(exports_1, context_1) {
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
    var core_1, mock_contact_1;
    var ContactService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_contact_1_1) {
                mock_contact_1 = mock_contact_1_1;
            }],
        execute: function() {
            ContactService = (function () {
                function ContactService() {
                }
                ContactService.prototype.getContacts = function () {
                    return Promise.resolve(mock_contact_1.CONTACTS);
                };
                ContactService.prototype.insertContact = function (contact) {
                    Promise.resolve(mock_contact_1.CONTACTS).then(function (contacts) { return contacts.push(contact); });
                };
                ContactService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ContactService);
                return ContactService;
            }());
            exports_1("ContactService", ContactService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QvY29udGFjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQUE7Z0JBVUEsQ0FBQztnQkFSQSxvQ0FBVyxHQUFYO29CQUNBLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHVCQUFRLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFFRCxzQ0FBYSxHQUFiLFVBQWMsT0FBZ0I7b0JBQzdCLE9BQU8sQ0FBQyxPQUFPLENBQUMsdUJBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQW9CLElBQU0sT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7Z0JBQ25GLENBQUM7Z0JBVEY7b0JBQUMsaUJBQVUsRUFBRTs7a0NBQUE7Z0JBV2IscUJBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELDJDQVVDLENBQUEiLCJmaWxlIjoiY29udGFjdC9jb250YWN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0NPTlRBQ1RTfSBmcm9tIFwiLi9tb2NrLWNvbnRhY3RcIlxuaW1wb3J0IHtDb250YWN0fSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb250YWN0U2VydmljZXtcblx0XG5cdGdldENvbnRhY3RzKCl7XG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoQ09OVEFDVFMpO1xuXHR9XG5cblx0aW5zZXJ0Q29udGFjdChjb250YWN0OiBDb250YWN0KXtcblx0XHRQcm9taXNlLnJlc29sdmUoQ09OVEFDVFMpLnRoZW4oKGNvbnRhY3RzIDogQ29udGFjdFtdICkgPT4gY29udGFjdHMucHVzaChjb250YWN0KSk7XG5cdH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
