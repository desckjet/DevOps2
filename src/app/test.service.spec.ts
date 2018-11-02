import { TestBed , inject} from '@angular/core/testing';
import { AppComponent } from './app.component';

import { TestService } from './test.service';

describe('TestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('verificar que el servicio existe', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service).toBeTruthy();
  });

  /*it('should have add function',
  inject([TestService], (service: TestService) => {
    expect(service.add).toBeTruthy();
  }));*

  it('sumar',
  inject([TestService], (service: TestService) => {
    expect(service.add(1,2)).toEqual(3);
  }));*/

  it('verificar que existe la funcion operar',
  inject([TestService], (service: TestService) => {
    expect(service.operacion).toBeTruthy();
  }));

  it('deberia mostrar el numero romano correspondiente',
  inject([TestService], (service: TestService) => {
    expect(service.operacion(5)).toContain('V');
  }));

  it('no deberia contener el numero romano correspondiente',
  inject([TestService], (service: TestService) => {
    expect(service.operacion(5)).not.toContain('I')
    expect(service.operacion(5)).not.toContain('X')
    expect(service.operacion(5)).not.toContain('L')
    expect(service.operacion(5)).not.toContain('C')
    expect(service.operacion(5)).not.toContain('D')
    expect(service.operacion(5)).not.toContain('M')
  }));

  it('no debe contener ningun numero romano',
  inject([TestService], (service: TestService) => {
    expect(service.operacion(-1)).not.toContain('I')
    expect(service.operacion(-1)).not.toContain('V')
    expect(service.operacion(-1)).not.toContain('X')
    expect(service.operacion(-1)).not.toContain('L')
    expect(service.operacion(-1)).not.toContain('C')
    expect(service.operacion(-1)).not.toContain('D')
    expect(service.operacion(-1)).not.toContain('M')
  }));

});
