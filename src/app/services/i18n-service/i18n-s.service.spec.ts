import { TestBed } from '@angular/core/testing';

import { I18nSService } from './i18n-s.service';

describe('I18nSService', () => {
  let service: I18nSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(I18nSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
