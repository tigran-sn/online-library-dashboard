import { TestBed } from '@angular/core/testing';

import { AvatarUtilsService } from './avatar-utils.service';

describe('AvatarUtilsService', () => {
  let service: AvatarUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvatarUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
