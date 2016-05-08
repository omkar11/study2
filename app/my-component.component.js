System.register(['angular2/core', './test.component', './bind.component'], function(exports_1, context_1) {
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
    var core_1, test_component_1, bind_component_1;
    var FirstComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            },
            function (bind_component_1_1) {
                bind_component_1 = bind_component_1_1;
            }],
        execute: function() {
            FirstComponent = (function () {
                function FirstComponent() {
                }
                FirstComponent.prototype.ngOnInit = function () {
                    this.name = "Omkar";
                };
                FirstComponent = __decorate([
                    core_1.Component({
                        selector: 'firstcomponent',
                        template: "\n\t\t\t\tHi, I am <span [style.color] = \"inputElement.value==='yes' ? 'red' : ''\">{{name}}</span> \n\t\t\t\tand this is my first angular 2 Component. \n\t\t\t\t\n\t\t\t\t<span [class.is-awesome]=\"inputElement.value==='yes'\" [class.is-not-awesome]=\"inputElement.value==='No'\">Its so awesome.</span>\n\t\t\t\t\n\t\t\t\t<br>\n\t\t\t\tIs it awesome?\n\t\t\t\t<input type=\"text\" #inputElement (keyup)=\"0\">\n\t\t\t\t<br>\n\n\t\t\t\tYour answer is: {{inputElement.value}}\n\t\t\t\t<br> <br>\n\t\t\t\t<button [disabled]=\"inputElement.value !=='yes'\">Only enabled if yes is entered</button>\n\t\t\t\t\n\t\t\t\t<h2>This is newly attached TEST Component</h2>\n\t\t\t\t<test></test>\n\t\t\t\t<bindcomponent></bindcomponent>\n\t\t\t\t\n\n\t",
                        styleUrls: ['src/css/mycomponent.css'],
                        directives: [test_component_1.TestComponent, bind_component_1.BindComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FirstComponent);
                return FirstComponent;
            }());
            exports_1("FirstComponent", FirstComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQ0E7Z0JBQUE7Z0JBTUEsQ0FBQztnQkFIQSxpQ0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFBO2dCQUNwQixDQUFDO2dCQWpDRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSxzdUJBb0JUO3dCQUNELFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUN0QyxVQUFVLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLDhCQUFhLENBQUM7cUJBRTFDLENBQUM7O2tDQUFBO2dCQVFGLHFCQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCwyQ0FNQyxDQUFBIiwiZmlsZSI6Im15LWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Rlc3RDb21wb25lbnR9IGZyb20gJy4vdGVzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtCaW5kQ29tcG9uZW50fSBmcm9tICcuL2JpbmQuY29tcG9uZW50JztcblxuXG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZmlyc3Rjb21wb25lbnQnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdFx0XHRIaSwgSSBhbSA8c3BhbiBbc3R5bGUuY29sb3JdID0gXCJpbnB1dEVsZW1lbnQudmFsdWU9PT0neWVzJyA/ICdyZWQnIDogJydcIj57e25hbWV9fTwvc3Bhbj4gXG5cdFx0XHRcdGFuZCB0aGlzIGlzIG15IGZpcnN0IGFuZ3VsYXIgMiBDb21wb25lbnQuIFxuXHRcdFx0XHRcblx0XHRcdFx0PHNwYW4gW2NsYXNzLmlzLWF3ZXNvbWVdPVwiaW5wdXRFbGVtZW50LnZhbHVlPT09J3llcydcIiBbY2xhc3MuaXMtbm90LWF3ZXNvbWVdPVwiaW5wdXRFbGVtZW50LnZhbHVlPT09J05vJ1wiPkl0cyBzbyBhd2Vzb21lLjwvc3Bhbj5cblx0XHRcdFx0XG5cdFx0XHRcdDxicj5cblx0XHRcdFx0SXMgaXQgYXdlc29tZT9cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0RWxlbWVudCAoa2V5dXApPVwiMFwiPlxuXHRcdFx0XHQ8YnI+XG5cblx0XHRcdFx0WW91ciBhbnN3ZXIgaXM6IHt7aW5wdXRFbGVtZW50LnZhbHVlfX1cblx0XHRcdFx0PGJyPiA8YnI+XG5cdFx0XHRcdDxidXR0b24gW2Rpc2FibGVkXT1cImlucHV0RWxlbWVudC52YWx1ZSAhPT0neWVzJ1wiPk9ubHkgZW5hYmxlZCBpZiB5ZXMgaXMgZW50ZXJlZDwvYnV0dG9uPlxuXHRcdFx0XHRcblx0XHRcdFx0PGgyPlRoaXMgaXMgbmV3bHkgYXR0YWNoZWQgVEVTVCBDb21wb25lbnQ8L2gyPlxuXHRcdFx0XHQ8dGVzdD48L3Rlc3Q+XG5cdFx0XHRcdDxiaW5kY29tcG9uZW50PjwvYmluZGNvbXBvbmVudD5cblx0XHRcdFx0XG5cblx0YCxcblx0c3R5bGVVcmxzOiBbJ3NyYy9jc3MvbXljb21wb25lbnQuY3NzJ10sXG5cdGRpcmVjdGl2ZXM6IFtUZXN0Q29tcG9uZW50LCBCaW5kQ29tcG9uZW50XVxuXHRcbn0pXG5cbmV4cG9ydCBjbGFzcyBGaXJzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuXHRuYW1lOiBzdHJpbmc7XG5cdG5nT25Jbml0KCk6YW55IHtcblx0XHR0aGlzLm5hbWUgPSBcIk9ta2FyXCJcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
