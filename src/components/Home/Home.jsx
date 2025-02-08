import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Home.css';
// import bubble from '../../assets/bubble.webp'
import BubbleAnimation from './BubbleAnimation';
import DescriptionAnimation from './DescriptionAnimation/DescriptionAnimation';
import yellowRectangle from '../../assets/yellowRectangle.svg';
import redRectangle from '../../assets/redRectangle.svg';
import blueRectangle1 from '../../assets/blueRectangle1.svg';
import blueRectangle2 from '../../assets/blueRectangle2.svg';
import shapes from '../../assets/shapes.svg';

function Home() {
  return (
    <div className='home'>
        <div className='section-one-text'>
            <div className='line1'>
              <img className='yellow-rectangle' src={yellowRectangle} />
              <div className='intro-header-one'>Hello! Welcome to my hub <span className='jellyfish'>👾</span></div>
            </div>
            
            <div className='line2'>
              <img className='red-rectangle' src={redRectangle} />
              <div className='intro-header-two'><span className='amanda'>I'm <b>Amanda Wong</b></span></div>
            </div>
            
            <div className='line3'>
              <img className='blue-rectangle1' src={blueRectangle1} />
              <div className='intro-header-three'>a passionate software engineer</div>
            </div>
            
            <div className='line4'>
              <img className='blue-rectangle2' src={blueRectangle2} />
              <div className='desc-anim'>
              <DescriptionAnimation />
              </div>
            </div>
            
        </div>
        <div className='section-one-img'>
          <img src={shapes} className='shapes' />
        </div>
    </div>
  );
}

export default Home;
