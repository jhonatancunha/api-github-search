import React from 'react'
import PropTypes from 'prop-types'

//  COMPONENTS
import Search from '../Search'
import UserInfo from '../User-Info'
import Actions from '../Actions'
import Repos from '../Repos'
import EmptyInput from '../common/Error/EmptyInput'
import Loading from '../common/Loading'

// STYLES
import { RepoWrapper, Logo, WrapperProfile, Wrapper } from './style'

// IMAGES
import iconRepo from '../../assets/repo-title.png'
import starredRepo from '../../assets/starred-title.svg'


const Container = ({ 
  userinfo, 
  repos, 
  starred, 
  isFetching, 
  handleSearch, 
  handleRepo, 
  handleStarred,
  handlePagination,
  emptyLabel
}) => {
  return (
  
    <Wrapper className='App'>

      <Logo>
        <p>GitHubSearchTool</p>
        <span>Encontre todos os repositórios e favoritos de seus amigos.</span>
      </Logo>
      <Search handleSearch={handleSearch} isDisabled={isFetching} />

      {isFetching && <Loading />}
      {emptyLabel && <EmptyInput />}


    {!!userinfo &&
      <WrapperProfile>
        <UserInfo userInfo={userinfo} />
        <Actions handleStarred={handleStarred} handleRepo={handleRepo} />
      </WrapperProfile>
    } 

    

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
