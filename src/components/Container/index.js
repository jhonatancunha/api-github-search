import React from 'react'
import PropTypes from 'prop-types'

//  COMPONENTS
import Search from '../Search'
import UserInfo from '../User-Info'
import Actions from '../Actions'
import Repos from '../Repos'
import Error from '../common/Error'
import Loading from '../common/Loading'

import Button from '../Actions/index'

// STYLES
import { RepoWrapper, Logo, WrapperProfile, Wrapper } from './style'

// IMAGES
import iconRepo from '../../assets/repo-title.png'
import starredRepo from '../../assets/starred-title.svg'
import logo from '../../assets/logo.svg'

const Container = ({
  userinfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  handleRepo,
  handleStarred,
  handlePagination,
  emptyLabel,
  emptyRepo,
  invalidUsername,
  networkError,
  isActionBtnRepoActive,
  isActionBtnStarredActive
}) => {
  return (

    <Wrapper className='App'>

      <Logo>
        <img src={logo} alt='LogoApp' />
        <p>GitHubSearchTool</p>
        <span>Encontre todos os repositórios e favoritos de seus amigos.</span>
      </Logo>
      <Search handleSearch={handleSearch} isDisabled={isFetching} />

      {networkError && <Error>Limite de requisições execidas ou rede desconectada.</Error>}
      {invalidUsername && <Error>Usuário não encontrado.</Error>}

      {isFetching && <Loading />}
      {emptyLabel && <Error>Este campo é de preenchimento obrigatório.</Error>}

      {!!userinfo &&
        <WrapperProfile>
          <UserInfo userInfo={userinfo} />
          <Actions
            btnStarred={isActionBtnStarredActive}
            btnRepo={isActionBtnRepoActive}
            handleStarred={handleStarred}
            handleRepo={handleRepo}
          />
        </WrapperProfile>}

      {emptyRepo && <Error>Repositório vazio.</Error>}

      <RepoWrapper>
        {/* !! é usado para converter para boolean */}
        {!!repos.repos.length &&
          <Repos
            icon={iconRepo}
            className='repos'
            title='Repositórios'
            repos={repos}
            handlePagination={(clicked) => handlePagination('repos', clicked)}
          />}

        {!!starred.repos.length &&
          <Repos
            icon={starredRepo}
            className='starred'
            title='Favoritos'
            repos={starred}
            handlePagination={(clicked) => handlePagination('starred', clicked)}
          />}
      </RepoWrapper>
    </Wrapper>
  )
}

const reposPropTypeShape = {
  repos: PropTypes.array.isRequired,
  pagination: PropTypes.object
}

Container.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.shape(reposPropTypeShape).isRequired,
  starred: PropTypes.shape(reposPropTypeShape).isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleRepo: PropTypes.func.isRequired,
  handleStarred: PropTypes.func.isRequired,
  handlePagination: PropTypes.func.isRequired
}

export default Container
