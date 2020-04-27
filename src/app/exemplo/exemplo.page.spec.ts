import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExemploPage } from './exemplo.page';

describe('ExemploPage', () => {
  let component: ExemploPage;
  let fixture: ComponentFixture<ExemploPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemploPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExemploPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
