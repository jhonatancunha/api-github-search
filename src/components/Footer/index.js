import React from 'react'

// STYLES
import { Wrapper } from './style'

// ICONS
import coffee  from '../../assets/coffee.svg'
import love  from '../../assets/love.svg'
import github  from '../../assets/git-icon.svg'
import face  from '../../assets/face-icon.svg'


export default () => {
  const faceLink = 'https://www.facebook.com/jhonatan.cunha.9/';
  const gitLink = 'https://github.com/jhonatancunha';

  return (
    <Wrapper>
      <p>
        Made
        <img src={coffee} alt="Coffee is love!" />
        with and
        <img className="love" src={love} alt="Code is love!" /> 
        <strong>by Jhonatan Cunha 2020</strong>
      </p>
      <p className="social-icons">
        <a href={gitLink}>
          <img src={github} alt="My page on GitHub!" />
        </a>
        <a href={faceLink}>
          <img src={face} alt="My profile on Facebook!" />
        </a>
      </p>
    </Wrapper>
  );
}