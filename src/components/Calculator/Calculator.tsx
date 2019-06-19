import * as React from 'react';
import CalculatorService from '../../utils/calculatorService';

export default function Calculator() {
  const [number, setNumber] = React.useState(0);
  const [text, setText] = React.useState('');
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberParsed = e.target.valueAsNumber || 0;
    setNumber(numberParsed);
  };
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const textParsed = e.target.value;
    setText(textParsed);
  };

  return (
    <div>
      <h3>Square</h3>
      <input type="number" value={number || 0} onChange={handleNumberChange} />
      <pre>{number}<sup>2</sup> = {CalculatorService.getSquare(number)}</pre>

      <h3>plus A</h3>
      <input type="text" value={text} onChange={handleTextChange} />
      ->
      <span>{CalculatorService.plusA(text)}</span>
    </div>
  );
}
