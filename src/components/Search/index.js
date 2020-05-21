import React from 'react'

import PropTypes from 'prop-types'

import { Wrapper, Input, LeftSearch } from './style'

const Search = ({ handleSearch, isDisabled }) => {
  return (
    <Wrapper className='search'>
      <LeftSearch
        onClick={handleSearch}
      >
        <svg width='35' height='37' viewBox='0 0 35 37' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M34.4678 33.7011L25.8397 24.5424C28.0582 21.8508 29.2737 18.4643 29.2737 14.9387C29.2737 6.70165 22.7075 0 14.6368 0C6.56621 0 0 6.70165 0 14.9387C0 23.1758 6.56621 29.8775 14.6368 29.8775C17.6667 29.8775 20.5539 28.9448 23.0225 27.1742L31.7161 36.4025C32.0795 36.7876 32.5682 37 33.092 37C33.5877 37 34.058 36.8071 34.415 36.4564C35.1736 35.7114 35.1978 34.476 34.4678 33.7011ZM14.6368 3.89706C20.6023 3.89706 25.4554 8.85023 25.4554 14.9387C25.4554 21.0272 20.6023 25.9804 14.6368 25.9804C8.67137 25.9804 3.81831 21.0272 3.81831 14.9387C3.81831 8.85023 8.67137 3.89706 14.6368 3.89706Z' fill='#1A1A16' />
        </svg>

      </LeftSearch>
      <Input
        onKeyUp={handleSearch}
        className='inputValue'
        type='search'
        placeholder='Digite seu nome de usuário aqui...'
        disabled={isDisabled}
      />
    </Wrapper>
  )
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
