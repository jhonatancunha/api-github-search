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

  :hover{
    background: #1A1A16;
  border: 2px solid #EFECEC;
  color: #EFECEC;
  }

  @media (max-width: 430px){
    width: 130px;
    font-size: 0.8em;
    margin: 10px;
  }
`


const Actions = ({ handleRepo, handleStarred }) => {
  return (
    <Wrapper className='actions'>
      <Button onClick={handleRepo}>Repositórios</Button>
      <Button onClick={handleStarred}>Favoritos</Button>
    </Wrapper>
  )
}

Actions.propTypes = {
  handleRepo: PropTypes.func.isRequired,
  handleStarred: PropTypes.func.isRequired
}

export default Actions
