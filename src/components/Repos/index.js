import React from 'react'
import PropTypes from 'prop-types'

// COMPONENTS
import Pagination from '../Pagination'

// STYLES
import { Wrapper, Title, Line } from './style'


const Repos = ({ 
  className, 
  title, 
  repos, 
  handlePagination,
  icon
}) => {

  return (
    <Wrapper className={className}>
      <Title>
        <img src={icon} alt="Title Icon!" />
        {title}
      </Title>
      <ul>
        {repos.repos.map((item, index) => (
          <Line key={index}>
            <a href={item.link}>{item.name}</a>
          </Line>
        ))}
      </ul>
      <Pagination 
        total={repos.pagination.total} 
        activePage={repos.pagination.activePage}
        onClick={handlePagination} 
      />
    </Wrapper>
  )
}

Repos.defaultProps = {
  className: '',
  repos: {}
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  handlePagination: PropTypes.func.isRequired,
  repos: PropTypes.shape({

    repos: PropTypes.arrayOf(PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })).isRequired,

    pagination: PropTypes.shape({
      total: PropTypes.number,
      activePage: PropTypes.number
    }).isRequired

  })
}

export default Repos
