import React, { ChangeEventHandler } from 'react'
import styled from 'styled-components'

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  align-items: center;
`

type InputGroupProps = {
  textarea?: boolean
  htmlFor: string
  labelText: string
  inputType: string
  inputName: string
  inputId: string
  value: string | string[] | number
  onChange: ChangeEventHandler
}

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
}: InputGroupProps) {
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
