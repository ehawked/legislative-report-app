import React from 'react';

interface InputProps {
  id: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  error?: string;
  className?: string;
  autoFocus?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  required = false,
  error,
  className = '',
  autoFocus = false,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoFocus={autoFocus}
        className={`w-full px-4 py-3 rounded-md border ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
        } focus:border-transparent focus:outline-none focus:ring-2 transition-all ${className}`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
