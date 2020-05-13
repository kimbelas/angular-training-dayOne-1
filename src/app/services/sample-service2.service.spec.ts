import { TestBed } from '@angular/core/testing';

import { SampleService2Service } from './sample-service2.service';

describe('SampleService2Service', () => {
  let service: SampleService2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleService2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
