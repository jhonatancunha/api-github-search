import styled from 'styled-components'

export const Wrapper = styled.div`
  background: #EFECEC;
  border-radius: 3px;
  margin-top: 20px;
  border-radius: 11px 11px 0 0;
  margin-bottom: 20px;
`

export const Title = styled.h1`
  width: 100%;
  height: 80px;
  background: #1A1A16;
  color: #EFECEC;
  font-size: 2em;
  display: flex;
  align-items: center;
  border-radius: 8px 8px 0 0;
  border: 4px solid #EFECEC;
  img{
    width: 50px;
    margin: 20px;
  }
`

export const Line = styled.li`
  height: 60px;
  list-style: none;
  padding: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  a:hover{
    text-decoration: underline;
  }

  :nth-child(even){
    background: #E0E0E0;
  }

  a{
      color: #1A1A16;
      text-decoration: none;
      font-size: 1.1rem;
  }
`
