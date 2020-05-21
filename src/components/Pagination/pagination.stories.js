import React from 'react'

import Pagination from './index'

export default {
  title: 'Pagination'
}

export const WithoutProps = () => (
  <Pagination />
)

export const WithTotalAndActivepage = () => (
  <Pagination
    total={10}
    activePage={5}
  />
)

export const WithPageLink = () => (
  <Pagination
    total={15}
    activePage={7}
    pageLink='http://localhost:3000/page/%page%'
  />
)

export const WithCallback = () => (
  <Pagination
    total={20}
    activePage={11}
    pageLink='http://localhost:3000/page/%page%'
    onClick={(page) => alert(page)}
  />
)
