import { JWTparser } from './jwtparser';

describe('JWTparser', () => {
  it('should create an instance', () => {
    expect(new JWTparser()).toBeTruthy();
  });
});
