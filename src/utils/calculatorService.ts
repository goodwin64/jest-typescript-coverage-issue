export type getSquare = (x: number) => number;

const getSquare: getSquare = (x) => {
  if (x === 0 || x === 1) {
    return x;
  }
  return x ** 2;
};

export interface ICalculatorService {
  getSquare: getSquare;
}

const CalculatorService: ICalculatorService = {
  getSquare,
};

export default CalculatorService;
