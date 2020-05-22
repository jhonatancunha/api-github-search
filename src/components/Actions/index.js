import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`

const Button = styled.button`

  height: 60px;
  width: 150px;
  border: 0;
  border-radius: 8px;
  font-size: 1.1em;
  color: #1A1A16;
  background: #EFECEC;
  cursor: pointer;
  margin: 16px;
  font-weight: bolder;
  transition: all .2s ease-in-out;



  &.clicked,
  &.hide:focus{
    background: #1A1A16;
    border: 3px solid #EFECEC;
    color: #EFECEC;
  }

  @media (hover: hover){
    :hover{
      background: #1A1A16;
      border: 3px solid #EFECEC;
      color: #EFECEC;
    }
  }

  @media (max-width: 430px){
    width: 130px;
    font-size: 0.8em;
    margin: 10px;
  }
`

const Actions = ({ handleRepo, handleStarred, btnRepo, btnStarred }) => {
  console.log(btnRepo)
  return (
    <Wrapper className='actions'>
      <Button className={btnRepo} onClick={handleRepo}>Repositórios</Button>
      <Button className={btnStarred} onClick={handleStarred}>Favoritos</Button>
    </Wrapper>
  )
}

Actions.propTypes = {
  handleRepo: PropTypes.func.isRequired,
  handleStarred: PropTypes.func.isRequired
}

export default Actions
