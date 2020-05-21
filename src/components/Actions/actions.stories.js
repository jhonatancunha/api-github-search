import React from 'react'
import { action } from '@storybook/addon-actions'

import Actions from './index'

export default {
  title: 'Actions'
}

export const ActionsComponents = () => (
  <Actions
    handleRepo={action('getRepos')}
    handleStarred={action('getStarred')}
  />
)
