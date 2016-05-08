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
    var SecondComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SecondComponent = (function () {
                function SecondComponent() {
                    this.contact = { firstName: "Madhura", lastName: "Kulkarni", email: "om@gmail.com", phone: "123 456 7891" };
                }
                SecondComponent.prototype.onSelect = function () {
                    console.log("Clicked");
                };
                SecondComponent = __decorate([
                    core_1.Component({
                        selector: 'secondcomponent',
                        templateUrl: '../templates/test.tpl.html',
                        styleUrls: ['src/css/mycomponent.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], SecondComponent);
                return SecondComponent;
            }());
            exports_1("SecondComponent", SecondComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY29uZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFBQTtvQkFDUSxZQUFPLEdBQUcsRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFDLENBQUM7Z0JBSzdHLENBQUM7Z0JBSEEsa0NBQVEsR0FBUjtvQkFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2dCQWJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsV0FBVyxFQUFFLDRCQUE0Qjt3QkFDekMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7cUJBR3RDLENBQUM7O21DQUFBO2dCQVFGLHNCQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCw2Q0FNQyxDQUFBIiwiZmlsZSI6InNlY29uZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc2Vjb25kY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICcuLi90ZW1wbGF0ZXMvdGVzdC50cGwuaHRtbCcsXG5cdHN0eWxlVXJsczogWydzcmMvY3NzL215Y29tcG9uZW50LmNzcyddXG5cblx0XG59KVxuXG5leHBvcnQgY2xhc3MgU2Vjb25kQ29tcG9uZW50e1xuXHRwdWJsaWMgY29udGFjdCA9IHtmaXJzdE5hbWU6IFwiTWFkaHVyYVwiLCBsYXN0TmFtZTogXCJLdWxrYXJuaVwiLCBlbWFpbDogXCJvbUBnbWFpbC5jb21cIiwgcGhvbmU6IFwiMTIzIDQ1NiA3ODkxXCJ9O1xuXG5cdG9uU2VsZWN0KCl7XG5cdFx0Y29uc29sZS5sb2coXCJDbGlja2VkXCIpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
