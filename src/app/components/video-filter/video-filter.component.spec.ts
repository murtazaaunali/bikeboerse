import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoFilterComponent } from './video-filter.component';

describe('VideoFilterComponent', () => {
  let component: VideoFilterComponent;
  let fixture: ComponentFixture<VideoFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoFilterComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
