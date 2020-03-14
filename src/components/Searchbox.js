import React from 'react'

export const SearchBox = ({searchChange}) => {
  return (
    <div>
      <input
        className="pa3 ba b--green bg-lightest-blue mb3"
        type='search'
        placeholder="search robots"
        onChange= {searchChange} />
    </div>
  )
  }