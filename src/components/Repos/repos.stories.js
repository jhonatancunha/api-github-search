import React from 'react'

import Repos from './index'

export default {
  title: 'Repos'
}

export const withTitleProp = () => (
  <Repos
    title='Favoritos'
  />
)

export const withArrayRepos = () => (
  <Repos
    title='Favoritos'
    repos={[{
      link: '#',
      name: 'Link aqui'
    }]}
  />
)
