import React from 'react'
import styled from 'styled-components'

const Error = styled.div`
  width: 100%;
  background: #f85959;
  height: 70px;
  margin-top: 20px;
  border-radius: 5px;
  color: #7c203a;
  font-size: 1.07em;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid #7c203a;

  p{
    text-align: center;
  }
`

export default ({ children }) => {
  return (
    <Error>
      <p>
        <strong>Erro: </strong>
        {children}
      </p>
    </Error>
  )
}
