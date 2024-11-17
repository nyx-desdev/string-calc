import React, { useState } from 'react';
import { useCalculator } from '../hooks/useCalculator';
import { InputField } from './InputField';
import { ResultDisplay } from './ResultDisplay';

export const CalculatorForm: React.FC = () => {
  const [input, setInput] = useState('');
  const { calculate, result, error } = useCalculator();

  const handleCalculate = () => {
    calculate(input);
  };

  return (
    <div className="space-y-4">
      <InputField
        value={input}
        onChange={setInput}
        label="Enter numbers (comma or newline separated)"
        placeholder="e.g. 1,2,3 or 1\n2,3"
      />

      <button
        onClick={handleCalculate}
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Calculate Sum
      </button>

      <ResultDisplay result={result} error={error} />
    </div>
  );
};