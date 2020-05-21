import styled from 'styled-components'


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  width: 90vw;
`


export const RepoWrapper = styled.div`
  display: flex;
  max-width: 500px;
  flex-direction: column;
  
  @media (max-width: 620px) {
    display: block;
  }

  .repos{
    width: 100%;
  }

  .starred{
    width: 100%;
  }
`

export const Logo = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  p{
    transition: opacity .2s ease;
    font-family: 'Kaushan Script', cursive;
    font-size: 4em;
    color: #EFECEC;

    @media (max-width: 530px){
      font-size: 3.5em;
    }

    @media (max-width: 450px){
      font-size: 3em;
    }

    @media (max-width: 390px){
      font-size: 2.5em;
    }
  }

  span{
    font-family: 'Roboto',sans-serif;
    font-size: 1em;
    color: #EFECEC;
    text-align: center;
  }
`

export const WrapperProfile = styled.div`
  background: #1A1A16;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  margin-top: 30px;
`