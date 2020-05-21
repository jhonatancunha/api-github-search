import React from 'react'
import PropTypes from 'prop-types'

// COMPONENTS
import pagination from '../../tests/pagination/'
import Page from './page'

// STYLE
import { WrapperUL } from './style'

const Pagination = ({ total, activePage, pageLink, onClick }) => (

  <WrapperUL>
    {pagination({ total, activePage }).map((item, index) => (
      <li key={index}>
        <Page
          activePage={activePage}
          page={item}
          pageLink={pageLink.replace('%page%', item)}
          onClick={onClick}
        />
      </li>
    ))}
  </WrapperUL>

)

Pagination.defaultProps = {
  pageLink: '',
  activePage: 1
}

Pagination.propTypes = {
  total: PropTypes.number,
  activePage: PropTypes.number,
  pageLink: PropTypes.string,
  onClick: PropTypes.func
}

export default Pagination
