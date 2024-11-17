import React from 'react';

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
}) => {
  return (
    <div>
      <label htmlFor="input" className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id="input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
};