import { useState } from 'react';
import { Calculator } from '../services/Calculator';

export const useCalculator = () => {
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculate = (input: string) => {
    try {
      const calculator = new Calculator();
      const sum = calculator.add(input);
      setResult(sum);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setResult(null);
    }
  };

  return { calculate, result, error };
};