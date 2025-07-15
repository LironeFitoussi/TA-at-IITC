import React from 'react';

interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  required?: boolean;
}

function InputGroup({ 
  label, 
  error, 
  helperText,
  required = false,
  ...props 
}: InputGroupProps) {
  return (
    <div className="input-group">
      <label className="input-label">
        {label}
        {required && <span className="required">*</span>}
      </label>
      <input 
        className={`input-field ${error ? 'input-error' : ''}`}
        {...props} 
      />
      {error && <p className="error-message">{error}</p>}
      {helperText && !error && <p className="helper-text">{helperText}</p>}
    </div>
  );
}

export default InputGroup; 