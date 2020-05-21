import React from 'react'

export default ({ page, pageLink, onClick, activePage }) => {
  const handleClick = !onClick ? null : (e) => {
    e.preventDefault()
    onClick(page)
  }

  return (
    (page === '...')
      ? <span>{page}</span>
      : <a
        className={`${(activePage === page) ? 'active' : 'page'}`}
        href={pageLink}
        onClick={handleClick}
        >{page}
        </a>
  )
}
