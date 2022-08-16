/*
* Arturo Miranda, August 13th, 2022
* Standarization and Notation in Documentation
*/
// Angular Imports
import { TestBed } from '@angular/core/testing';
// Personal Imports
import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
