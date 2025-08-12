import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUser } from './contact-user';

describe('ContactUser', () => {
  let component: ContactUser;
  let fixture: ComponentFixture<ContactUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
