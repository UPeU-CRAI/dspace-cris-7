import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RegisterEmailComponent } from './register-email.component';
import { RegisterEmailFormComponent } from '../../register-email-form/register-email-form.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('RegisterEmailComponent', () => {

  let comp: RegisterEmailComponent;
  let fixture: ComponentFixture<RegisterEmailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
      imports: [CommonModule, TranslateModule.forRoot(), ReactiveFormsModule, RegisterEmailComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .overrideComponent(RegisterEmailComponent, {
        remove: {
          imports: [RegisterEmailFormComponent]
        }
      })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterEmailComponent);
    comp = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(comp).toBeDefined();
  });
});
