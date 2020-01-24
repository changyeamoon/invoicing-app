import React from 'react'

import styled from 'styled-components'

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  align-items: center;
`

export function InputGroup({
  textarea,
  htmlFor,
  labelText,
  inputType,
  inputName,
  inputId,
  value,
  onChange,
  ...restProps
}) {
  return (
    <Group>
      <label htmlFor={htmlFor}>{labelText}</label>
      {textarea ? (
        <textarea
          name={inputName}
          id={inputId}
          value={value}
          onChange={onChange}
          {...restProps}
        />
      ) : (
        <input
          type={inputType}
          name={inputName}
          id={inputId}
          value={value}
          onChange={onChange}
          {...restProps}
        />
      )}
    </Group>
  )
}
