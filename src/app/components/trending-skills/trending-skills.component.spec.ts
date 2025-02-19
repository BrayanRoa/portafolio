import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingSkillsComponent } from './trending-skills.component';

describe('TrendingSkillsComponent', () => {
  let component: TrendingSkillsComponent;
  let fixture: ComponentFixture<TrendingSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingSkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
