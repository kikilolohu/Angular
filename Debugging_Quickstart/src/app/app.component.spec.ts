import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {              //App component declarations
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title `, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Debugging Quickstart');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Debugging Quickstart');
  }));
    // Default tests
  describe("Matchers:", function () {

    it("toBe matcher compares with ===", function () {
        var a = 12;
        var b = a;

        expect(a).toBe(b);
        expect(a).not.toBe(null);
    });
  });
  describe("toEqual matcher", function() {
    it("works for simple variables", function() {
      var a = 12;
      expect(a).toEqual(12);
    });

    it("works for objects", function () {
        var foo = {
            a: 12,
            b: 34
        };
        var bar = {
            a: 12,
            b: 34
        };
        expect(foo).toEqual(bar);
    });
  });
  describe("A spec using the fail function", function () {
      var foo = function (x, callBack) {
          if (x) {
              callBack();
          }
      };

      it("should not call the callBack", function () {
          foo(false, function () {
              fail("Callback has been called");
          });
      });
  });

  describe("simple functions", function () {    
      var c;
      
      beforeAll(function () {     
           c= 3;
      });
      afterEach(function () {
          c = 0;
      });
      it("sets a flag and takes arguments", function () {
          const fixture = TestBed.createComponent(AppComponent);
          const app = fixture.debugElement.componentInstance;
          expect(app.setCValue(1,2)).toBe(c);
      });
      it("changes a variable", function () {
          const fixture = TestBed.createComponent(AppComponent);
          const app = fixture.debugElement.componentInstance;

          expect(app.decrementC()).toBe(c);
      });
      it("add two variables", function () {                 
          const fixture = TestBed.createComponent(AppComponent);
          const app = fixture.debugElement.componentInstance;
          expect(app.addArguments()).toEqual(app.a+app.b);
      });   
  });

  describe("my text with Spies", function () {
      beforeAll(function () {
          this.fixture = TestBed.createComponent(AppComponent);
          this.app = this.fixture.debugElement.componentInstance;
      });
      it("should be my text", function () {
          
          expect(this.app.text).toEqual("My text");
      });
      xit("should be altered", function () {
          const fixture = TestBed.createComponent(AppComponent);
          const app = this.fixture.debugElement.componentInstance;

          spyOn(app, 'changeText');

          //this.app.changeText();
          //expect(this.app.changeText).tohavebeencalledTimes(1);            //doesn't work
          //expect(this.app.text).toEqual("new text"); 

          //var temp=this.app.changeText();
          //expect(temp).toEqual("New text");
          //expect(this.app.spyFunction).toHaveBeenCalledTimes(1);
          expect(app.text).toBe("My text")
          expect(app.changeText()).toBe("New text");
          expect(app.changeText).toHaveBeenCalledTimes(1);
      });
  });
});


