import { TestBed } from '@angular/core/testing';

import { GuithubService } from './guithub.service';

describe('GuithubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuithubService = TestBed.get(GuithubService);
    expect(service).toBeTruthy();
  });
});
