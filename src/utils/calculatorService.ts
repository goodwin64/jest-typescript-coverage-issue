import plusA, { typePlusA } from './plusA';

type getSquare = (x: number) => number;

const getSquare: getSquare = (x) => {
  if (x === 0 || x === 1) {
    return x;
  }
  return x ** 2;
};

interface ICalculatorService {
  getSquare: getSquare;
  plusA: typePlusA,
}

const CalculatorService: ICalculatorService = {
  getSquare,
  plusA,
};

export default CalculatorService;
