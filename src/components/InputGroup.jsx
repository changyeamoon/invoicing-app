import React from 'react'

export function InputGroup({
  htmlFor,
  labelText,
  inputType,
  inputName,
  inputId,
  value,
  onChange,
}) {
  return (
    <div>
      <label htmlFor={htmlFor}>{labelText}</label>
      <input
        type={inputType}
        name={inputName}
        id={inputId}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
