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
      <p>下の[スタート]ボタンを押すと本が見れます。</p>
      <p>まだまだバグが多いかと思いますが修正していきます。</p>
      <p>申し訳ありませんがしばらくアクセスがない場合にバックエンドサーバーが落ちてしまいますので、<br/>エラーの際には恐れ入りますが数秒経ってからリロードして頂けると助かります。<br/>また修正していきます</p>
      <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            path='/'
          >
            スタート
          </Button>
        <a href='https://www.youtube.com/watch?v=x5onHuMZlbI' className='btn-mobile'>
          <button className='btn btn--outline btn--large'>
            Youtube クリック<i className='far fa-play-circle' />
          </button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
