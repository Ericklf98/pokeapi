import { TestBed } from '@angular/core/testing';

import { PokemonSeviciosService } from './pokemon-sevicios.service';

describe('PokemonSeviciosService', () => {
  let service: PokemonSeviciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonSeviciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
