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
                        template: "<p>This is a bind component which illustrates how to bind the data. Two way binding.\n\t\t\t\t\tDynamically display the text</p>\n\t\t\t\t<!-- Round bracket means Flow from view to Component -->\n\t\t\t\t<!-- Square bracket means Flow from Component to view -->\n\t\t\t\t<h3\n\t\t\t\t(click)=\"onSelect()\" \t\n\t\t\t\t[class.is-awesome] = \"showDetail=== true\"\n\t\t\t\t> {{contact.firstName}} {{contact.lastName}}</h3>\n\n\t\t\t\t<!-- Two way data binding -->\n\t\t\t\t<input [(ngModel)]=\"contact.firstName\"> <-- This is example of two way data binding.\n\n\t\t\t\t<!-- *ngIF is structural directive. It changes the structure of the HTML page.\n\t\t\t\t It either displays the block of div or hides it. -->\n\t\t\t\t<div *ngIf=\"showDetail === true\">\n\t\t\t\tPhone Number: {{contact.phone}} <br>\n\t\t\t\tEmail Address: {{contact.email}}\n\n\t\t\t\t</div>\n\t\t\t\t\n\t",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoaXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTZCQTtnQkFBQTtvQkFFUSxZQUFPLEdBQUcsRUFBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFDLENBQUM7b0JBRW5HLGVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBaUIzQixDQUFDO2dCQWZBLHVEQUF1RDtnQkFDdkQsaUNBQVEsR0FBUjtvQkFFQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUssQ0FBQyxDQUMxQixDQUFDO3dCQUNBLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO3dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7b0JBQ3ZDLENBQUM7b0JBRUgsSUFBSSxDQUNKLENBQUM7d0JBQ0EsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7d0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztvQkFDeEMsQ0FBQztnQkFDSixDQUFDO2dCQS9DRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsODJCQW9CVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztxQkFFdEMsQ0FBQzs7a0NBQUE7Z0JBdUJGLHFCQUFDO1lBQUQsQ0FyQkEsQUFxQkMsSUFBQTtZQXJCRCwyQ0FxQkMsQ0FBQSIsImZpbGUiOiJ0aGlyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2JpbmRjb21wb25lbnQnLFxuXHR0ZW1wbGF0ZTogYDxwPlRoaXMgaXMgYSBiaW5kIGNvbXBvbmVudCB3aGljaCBpbGx1c3RyYXRlcyBob3cgdG8gYmluZCB0aGUgZGF0YS4gVHdvIHdheSBiaW5kaW5nLlxuXHRcdFx0XHRcdER5bmFtaWNhbGx5IGRpc3BsYXkgdGhlIHRleHQ8L3A+XG5cdFx0XHRcdDwhLS0gUm91bmQgYnJhY2tldCBtZWFucyBGbG93IGZyb20gdmlldyB0byBDb21wb25lbnQgLS0+XG5cdFx0XHRcdDwhLS0gU3F1YXJlIGJyYWNrZXQgbWVhbnMgRmxvdyBmcm9tIENvbXBvbmVudCB0byB2aWV3IC0tPlxuXHRcdFx0XHQ8aDNcblx0XHRcdFx0KGNsaWNrKT1cIm9uU2VsZWN0KClcIiBcdFxuXHRcdFx0XHRbY2xhc3MuaXMtYXdlc29tZV0gPSBcInNob3dEZXRhaWw9PT0gdHJ1ZVwiXG5cdFx0XHRcdD4ge3tjb250YWN0LmZpcnN0TmFtZX19IHt7Y29udGFjdC5sYXN0TmFtZX19PC9oMz5cblxuXHRcdFx0XHQ8IS0tIFR3byB3YXkgZGF0YSBiaW5kaW5nIC0tPlxuXHRcdFx0XHQ8aW5wdXQgWyhuZ01vZGVsKV09XCJjb250YWN0LmZpcnN0TmFtZVwiPiA8LS0gVGhpcyBpcyBleGFtcGxlIG9mIHR3byB3YXkgZGF0YSBiaW5kaW5nLlxuXG5cdFx0XHRcdDwhLS0gKm5nSUYgaXMgc3RydWN0dXJhbCBkaXJlY3RpdmUuIEl0IGNoYW5nZXMgdGhlIHN0cnVjdHVyZSBvZiB0aGUgSFRNTCBwYWdlLlxuXHRcdFx0XHQgSXQgZWl0aGVyIGRpc3BsYXlzIHRoZSBibG9jayBvZiBkaXYgb3IgaGlkZXMgaXQuIC0tPlxuXHRcdFx0XHQ8ZGl2ICpuZ0lmPVwic2hvd0RldGFpbCA9PT0gdHJ1ZVwiPlxuXHRcdFx0XHRQaG9uZSBOdW1iZXI6IHt7Y29udGFjdC5waG9uZX19IDxicj5cblx0XHRcdFx0RW1haWwgQWRkcmVzczoge3tjb250YWN0LmVtYWlsfX1cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdGAsXG5cdHN0eWxlVXJsczogWydzcmMvY3NzL215Y29tcG9uZW50LmNzcyddXG5cdFxufSlcblxuZXhwb3J0IGNsYXNzIFRoaXJkQ29tcG9uZW50e1xuXG5cdHB1YmxpYyBjb250YWN0ID0ge2ZpcnN0TmFtZTogXCJPbWthclwiLCBsYXN0TmFtZTogXCJLdWxrYXJuaVwiLCBlbWFpbDogXCJvbUBnbWFpbC5jb21cIiwgcGhvbmU6IFwiMTIzIDQ1NiA3ODkxXCJ9O1xuXG5cdHB1YmxpYyBzaG93RGV0YWlsID0gZmFsc2U7XG5cblx0Ly8gdGhpcyBtZXRob2QgdG9nZ2xlcyB0aGUgYm9vbGVhbiB0byBkaXNwbGF5IHRoZSB0ZXh0LlxuXHRvblNlbGVjdCgpe1xuXHRcdFxuXHRcdGlmKHRoaXMuc2hvd0RldGFpbCA9PT0gZmFsc2UpXG5cdFx0ICAge1xuXHRcdCAgIFx0dGhpcy5zaG93RGV0YWlsID0gdHJ1ZTtcblx0XHQgICBcdGNvbnNvbGUubG9nKFwiU2hvd0RldGFpbCBpcyBub3cgdHJ1ZVwiKTtcblx0XHQgICB9XG5cblx0XHQgZWxzZVxuXHRcdCB7XG5cdFx0IFx0dGhpcy5zaG93RGV0YWlsID0gZmFsc2U7XG5cdFx0IFx0Y29uc29sZS5sb2coXCJTaG93RGV0YWlsIGlzIG5vdyBmYWxzZVwiKTtcblx0XHQgfSBcbn1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
