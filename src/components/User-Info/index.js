import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'

// ICONS
import repoIcon from '../../assets/repo-icon.svg'
import fallowersIcon from '../../assets/fallowers-icon.svg'
import fallowingIcon from '../../assets/fallowing-icon.svg'

const Wrapper = styled.div`
  color: #EFECEC;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  .avatar {
    border-radius: 100%;
    height: 182px;
    width: 182px;
  }

  a{
    color: #EFECEC;
    text-decoration: none;
    font-size: 1.3rem;
  }

  @media (hover: hover){
    a:hover{
      text-decoration: underline;
    }    
  }

  ul{
    margin-top: 10px;
  }

  ul li {
    list-style: none;
    text-align: center;
    margin: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul li img{
    margin-right: 10px;
  }


`

const UserInfo = ({ userInfo }) => {
  return (
    <Wrapper className='user_info'>
      <img className='avatar' src={userInfo.avatar} alt='Avatar!' />

      <h1>
        <a href={`https://github.com/${userInfo.login}`}>
          {userInfo.username}
        </a>
      </h1>

      <ul className='respos-info'>
        <li>
          <img src={repoIcon} alt='Repositorios Icons!' />
          Repositórios: {userInfo.repos}
        </li>
        <li>
          <img src={fallowersIcon} alt='Seguidores Icons!' />
          Seguidores: {userInfo.followers}
        </li>
        <li>
          <img src={fallowingIcon} alt='Seguindo Icons!' />
          Seguindo: {userInfo.following}
        </li>
      </ul>
    </Wrapper>
  )
}

UserInfo.propTypes = {
  UserInfo: PropTypes.shape({

    avatar: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired

  })
}

export default UserInfo
