import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

export const Input = styled.input`
  width: 435px;
  height: 60px;
  background: #1F2024;
  color: #EFECEC;
  border: 0;
  border-radius: 0 10px 10px 0;
  font-size: 1.2em;
  padding-left: 10px;

  margin-left: -4px;
  z-index: 1;
  
  transition: all .1s ease;

  :focus{
    border-bottom: 3px solid #EFECEC;
    border-right: 3px solid #EFECEC;
    border-top: 3px solid #EFECEC;
  }

`

export const LeftSearch = styled.button`
  z-index: 10;  
  display: flex;
  align-items: center;
  justify-content: center;
  
  flex-shrink: 0;

  height: 60px;
  width: 65px;
  border-radius: 5px;
  background: #EFECEC;
  border: 0;

  transition: all .2s ease-in-out;

  
  
  @media (hover: hover){
    :hover{
      background: #1A1A16;
      border: 3px solid #EFECEC;
      cursor: pointer;

      svg path{
        fill: #EFECEC;
      }
  }
  }
`
