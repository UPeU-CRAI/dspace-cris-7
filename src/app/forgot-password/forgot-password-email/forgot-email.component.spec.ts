import { ForgotEmailComponent } from './forgot-email.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterEmailFormComponent } from '../../register-email-form/register-email-form.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('ForgotEmailComponent', () => {
  let comp: ForgotEmailComponent;
  let fixture: ComponentFixture<ForgotEmailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, TranslateModule.forRoot(), ReactiveFormsModule, ForgotEmailComponent],
      providers: [provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .overrideComponent(ForgotEmailComponent, {
        remove: {
          imports: [RegisterEmailFormComponent]
        }
      })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotEmailComponent);
    comp = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(comp).toBeDefined();
  });
});
