import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MyFormComponent } from './my-form.component';

describe('MyFormComponent', () => {
  let component: MyFormComponent;
  let fixture: ComponentFixture<MyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ MyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.myForm.valid).toBeFalsy();
  });

  it('input field validity', () => {
    let input = component.myForm.controls['input'];
    expect(input.valid).toBeFalsy();

    input.setValue('');
    expect(input.hasError('required')).toBeTruthy();

    input.setValue('a');
    expect(input.hasError('minlength')).toBeTruthy();

    input.setValue('abc');
    expect(input.valid).toBeTruthy();
  });

  it('should return the correct product', () => {
    const result = component.multiplyNumbers(2, 3);
    expect(result).toEqual(6);
  });

  // it('submitting form emits value', () => {
  //   expect(component.myForm.valid).toBeFalsy();
  //   component.myForm.controls['input'].setValue('test');
  //   expect(component.myForm.valid).toBeTruthy();

  //   let formValue;
  //   component.formSubmit.subscribe((value) => formValue = value);

  //   component.onSubmit();

  //   expect(formValue).toEqual({input: 'test'});
  // });
});
