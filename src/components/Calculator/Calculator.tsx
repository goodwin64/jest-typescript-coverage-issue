import * as React from 'react';
import CalculatorService from '../../utils/calculatorService';

export default function Calculator() {
  const [number, setNumber] = React.useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberParsed = e.target.valueAsNumber || 0;
    setNumber(numberParsed);
  };

  return (
    <div>
      <input type="number" value={number || 0} onChange={handleChange} />
      <pre>{number}<sup>2</sup> = {CalculatorService.getSquare(number)}</pre>
    </div>
  );
}
