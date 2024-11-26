import React from 'react'

const Select = React.forwardRef(({onChange, name, label}, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange}>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
    </select>
  </>
))

export default Select
