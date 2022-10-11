import React from 'react';
import '../Lp.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='https://picsum.photos/150' autoPlay loop muted />
      <h1>Bizlink Library</h1>
      <p>最初にサインインをして下さいね。</p>
      <p>下の[スタート]ボタンを押すと本が見れます。</p>
      <p>まだまだバグが多いかと思いますが修正していきます。</p>
      <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            スタート
          </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Youtube クリック<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
