import styled from 'styled-components'

export const WrapperUL = styled.ul`
  display: flex;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: center;
  
  li{    
    height: 40px;
    width: 40px;
    list-style: none;
    margin: 0 0.3rem 0 0.3rem;
  }
  
  
  
  a
  ,span{
    transition: all .2s ease;
    height: 100%;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    background: #EFECEC;
    color: #1A1A16;
    border: 1px solid #1A1A16;

    text-decoration: none;
    font-weight: bold;
    font-size: 0.8em;
    border-radius: 3px;
  }
  
  .active{
    color: #EFECEC;
    background: #1A1A16;
  }

  @media (hover: hover){
    .page:hover{
      color: #EFECEC;
      background: #1A1A16;
    }
  }

`
