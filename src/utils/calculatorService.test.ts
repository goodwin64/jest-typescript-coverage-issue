import CalculatorService from './calculatorService';

describe('CalculatorService', () => {
  it('should return given number if 0 passed', () => {
    expect(CalculatorService.getSquare(0)).toBe(0);
  });

  // it('should return given number if 1 passed', () => {
  //   expect(CalculatorService.getSquare(1)).toBe(1);
  // });

  it('should return number square', () => {
    expect(CalculatorService.getSquare(2)).toBe(4);
  });

  it('should process big numbers', () => {
    expect(CalculatorService.getSquare(2e10)).toBe(4e20);
  });

  it('should always return positive', () => {
    expect(CalculatorService.getSquare(-5)).toBe(25);
  });
});
