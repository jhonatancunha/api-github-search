import styled from 'styled-components'

export const Wrapper = styled.footer`
  width: 100%;
  background: #1A1A16;
  color: #EFECEC;
  height: 120px;
  margin-top: 40px;
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  position: absolute;
  bottom: 0;

  @media (max-width: 450px){
    font-size: 1em;

    img{
      width: 35px;
    }

    
  .social-icons{
    img{
      width: 25px;
    }
  }

  }

  @media (max-width: 376px){
    font-size: 0.93em;

    img{
      width: 25px;
    }
  }

  

  p{
    display: flex;
    align-items: center;
    margin: 4px;
  }

  .love{
    margin-left: 10px;
    margin-right: 10px;
  }

  .social-icons{
    img{
      margin-right: 8px;
      cursor: pointer;
    }
  }

  @media (hover: hover){
    img{
      transition: opacity .2s ease;
      opacity: 0.5;
    }
    img:hover{
      cursor: pointer;
      opacity: 1;
    }
  }
`
