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
    var ThirdComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ThirdComponent = (function () {
                function ThirdComponent() {
                    this.contact = { firstName: "Omkar", lastName: "Kulkarni", email: "om@gmail.com", phone: "123 456 7891" };
                    this.showDetail = false;
                }
                // this method toggles the boolean to display the text.
                ThirdComponent.prototype.onSelect = function () {
                    if (this.showDetail === false) {
                        this.showDetail = true;
                        console.log("ShowDetail is now true");
                    }
                    else {
                        this.showDetail = false;
                        console.log("ShowDetail is now false");
                    }
                };
                ThirdComponent = __decorate([
                    core_1.Component({
                        selector: 'bindcomponent',
                        template: "<p>This component illustrates how to bind the data. Two way binding.\n\t\t\t\t\tDynamically display the text</p>\n\t\t\t\t<h3\n\t\t\t\t(click)=\"onSelect()\" \t\n\t\t\t\t[class.is-awesome] = \"showDetail=== true\"\n\n\t\t\t\t> {{contact.firstName}} {{contact.lastName}}</h3>\n\n\t\t\t\t// *ngIF is structural directive. It changes the structure of the HTML page.\n\t\t\t\t// It either displays the block of div or hides it.\n\t\t\t\t<div *ngIf=\"showDetail === true\">\n\t\t\t\tPhone Number: {{contact.phone}} <br>\n\t\t\t\tEmail Address: {{contact.email}}\n\n\t\t\t\t</div>\n\t\t\t\t\n\t",
                        styleUrls: ['src/css/mycomponent.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ThirdComponent);
                return ThirdComponent;
            }());
            exports_1("ThirdComponent", ThirdComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUJBO2dCQUFBO29CQUVRLFlBQU8sR0FBRyxFQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUMsQ0FBQztvQkFFbkcsZUFBVSxHQUFHLEtBQUssQ0FBQztnQkFnQjFCLENBQUEsQUFBQztnQkFkRCx1REFBdUQ7Z0JBQ3ZELGlDQUFRLEdBQVI7b0JBRUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUMsQ0FDMUIsQ0FBQzt3QkFDQSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzt3QkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO29CQUN2QyxDQUFDO29CQUVILElBQUksQ0FDSixDQUFDO3dCQUNBLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO3dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7b0JBQ3hDLENBQUM7Z0JBQ0osQ0FBQztnQkEzQ0Q7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsZUFBZTt3QkFDekIsUUFBUSxFQUFFLDhrQkFnQlQ7d0JBQ0QsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7cUJBRXRDLENBQUM7O2tDQUFBO2dCQXNCRCxxQkFBQztZQUFELENBcEJELEFBb0JFLElBQUQ7WUFwQkQsMkNBb0JDLENBQUEiLCJmaWxlIjoiYmluZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2JpbmRjb21wb25lbnQnLFxuXHR0ZW1wbGF0ZTogYDxwPlRoaXMgY29tcG9uZW50IGlsbHVzdHJhdGVzIGhvdyB0byBiaW5kIHRoZSBkYXRhLiBUd28gd2F5IGJpbmRpbmcuXG5cdFx0XHRcdFx0RHluYW1pY2FsbHkgZGlzcGxheSB0aGUgdGV4dDwvcD5cblx0XHRcdFx0PGgzXG5cdFx0XHRcdChjbGljayk9XCJvblNlbGVjdCgpXCIgXHRcblx0XHRcdFx0W2NsYXNzLmlzLWF3ZXNvbWVdID0gXCJzaG93RGV0YWlsPT09IHRydWVcIlxuXG5cdFx0XHRcdD4ge3tjb250YWN0LmZpcnN0TmFtZX19IHt7Y29udGFjdC5sYXN0TmFtZX19PC9oMz5cblxuXHRcdFx0XHQvLyAqbmdJRiBpcyBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZS4gSXQgY2hhbmdlcyB0aGUgc3RydWN0dXJlIG9mIHRoZSBIVE1MIHBhZ2UuXG5cdFx0XHRcdC8vIEl0IGVpdGhlciBkaXNwbGF5cyB0aGUgYmxvY2sgb2YgZGl2IG9yIGhpZGVzIGl0LlxuXHRcdFx0XHQ8ZGl2ICpuZ0lmPVwic2hvd0RldGFpbCA9PT0gdHJ1ZVwiPlxuXHRcdFx0XHRQaG9uZSBOdW1iZXI6IHt7Y29udGFjdC5waG9uZX19IDxicj5cblx0XHRcdFx0RW1haWwgQWRkcmVzczoge3tjb250YWN0LmVtYWlsfX1cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdGAsXG5cdHN0eWxlVXJsczogWydzcmMvY3NzL215Y29tcG9uZW50LmNzcyddXG5cdFxufSlcblxuZXhwb3J0IGNsYXNzIFRoaXJkQ29tcG9uZW50e1xuXG5cdHB1YmxpYyBjb250YWN0ID0ge2ZpcnN0TmFtZTogXCJPbWthclwiLCBsYXN0TmFtZTogXCJLdWxrYXJuaVwiLCBlbWFpbDogXCJvbUBnbWFpbC5jb21cIiwgcGhvbmU6IFwiMTIzIDQ1NiA3ODkxXCJ9O1xuXG5cdHB1YmxpYyBzaG93RGV0YWlsID0gZmFsc2U7XG5cblx0Ly8gdGhpcyBtZXRob2QgdG9nZ2xlcyB0aGUgYm9vbGVhbiB0byBkaXNwbGF5IHRoZSB0ZXh0LlxuXHRvblNlbGVjdCgpe1xuXHRcdFxuXHRcdGlmKHRoaXMuc2hvd0RldGFpbCA9PT0gZmFsc2UpXG5cdFx0ICAge1xuXHRcdCAgIFx0dGhpcy5zaG93RGV0YWlsID0gdHJ1ZTtcblx0XHQgICBcdGNvbnNvbGUubG9nKFwiU2hvd0RldGFpbCBpcyBub3cgdHJ1ZVwiKTtcblx0XHQgICB9XG5cblx0XHQgZWxzZVxuXHRcdCB7XG5cdFx0IFx0dGhpcy5zaG93RGV0YWlsID0gZmFsc2U7XG5cdFx0IFx0Y29uc29sZS5sb2coXCJTaG93RGV0YWlsIGlzIG5vdyBmYWxzZVwiKTtcblx0XHQgfSBcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
