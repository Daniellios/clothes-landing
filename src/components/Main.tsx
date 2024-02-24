import React, { useEffect } from 'react'
import { Slider } from './Slider'
import { Testimonials } from './Testimonials'
import menDefaultBig from '../assets/images/man-default-p-800.jpeg'
import menDefaultSmall from '../assets/images/man-default-p-500.jpeg'
import womenDefaultBig from '../assets/images/women-default-p-800.jpeg'
import womenDefaultSmall from '../assets/images/women-default-p-500.jpeg'
import circle from '../assets/images/circle-container.svg'
import arrowLogo from '../assets/images/arrow.svg'
import inkContainer from '../assets/images/ink-container.svg'
import arrowRight from '../assets/images/arrow-right.svg'

export const Main = () => {
  const marque = new Array(10).fill(1)
  const cursorFollow = () => {
    const TAIL_LENGTH = 20;

    const cursor: any = document.getElementById('cursor');

    let mouseX = 0;
    let mouseY = 0;

    let cursorCircles: any;
    let cursorHistory = Array(TAIL_LENGTH).fill({ x: 0, y: 0 });

    function onMouseMove(event: any) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    function initCursor() {
      for (let i = 0; i < TAIL_LENGTH; i++) {
        let div = document.createElement('div');
        div.classList.add('cursor-circle');
        cursor.append(div);
      }
      cursorCircles = Array.from(document.querySelectorAll('.cursor-circle'));
    }

    function updateCursor() {
      cursorHistory.shift();
      cursorHistory.push({ x: mouseX, y: mouseY });

      for (let i = 0; i < TAIL_LENGTH; i++) {
        let current = cursorHistory[i];
        let next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];

        let xDiff = next.x - current.x;
        let yDiff = next.y - current.y;

        current.x += xDiff * 0.35;
        current.y += yDiff * 0.35;
        cursorCircles[i].style.transform = `translate(${current.x}px, ${current.y
          }px) scale(${i / TAIL_LENGTH})`;
      }
      requestAnimationFrame(updateCursor);
    }

    return {
      initCursor,
      updateCursor,
      onMouseMove
    }
  }


  useEffect(() => {
    const { initCursor, updateCursor, onMouseMove } = cursorFollow()
    document.addEventListener('mousemove', onMouseMove, false);
    initCursor()
    updateCursor()
  }, [])


  return (
    <main>
      <section>
        <div className="headline">
          <h1 className="spring">Spring,</h1>
          <h1 className="summer">Summer</h1>
          <div className="coll">
            <div>COLL.</div>
            <div className="year">2021</div>
          </div>
        </div>

        <div className="men-women-grid">
          <div className="man-default-div">
            <picture>
              <source media="(min-width:800px)" src={menDefaultBig} />
              <source media="(min-width:500px)" src={menDefaultSmall} />
              <img src={menDefaultSmall} alt="" />
            </picture>
          </div>
          <div className="">
            <picture>
              <source media="(min-width:800px)" src={womenDefaultBig} />
              <source media="(min-width:500px)" src={womenDefaultSmall} />
              <img src={womenDefaultSmall} alt="" />
            </picture>
          </div>
        </div>
        <div className="description-grid">
          <div className="description-flex">
            <div>(01)</div>
            <div>MAN</div>
          </div>
          <div className="description-flex">
            <div>(02)</div>
            <div>WMNS</div>
          </div>
        </div>

        <div className="explore-div">
          <div>Explore</div>
          <img className="circle" srcSet={circle} alt="" />
          <img className="arrow-right" srcSet={arrowLogo} alt="" />
        </div>
      </section>
      <div className="marquee">
        <div>
          {marque.map((_, idx) =>
            <span key={idx} >
              <span>DEPLACE SHOP</span>
              <span >&#9632;</span>
              <span>DO NOT SCROLL</span>
              <span>&#9632;</span>
            </span>
          )}
        </div>
      </div>
      <div className="who-we-are">
        <p>An independent <span className="underline">brand</span> of urban trekking shoes and accessories that comes from a convergence of arts and personalities.</p>
      </div>
      <Slider />
      <div className="shop-all">
        <div>Shop all</div>
        <img className="circle-2" src={inkContainer} alt="" />
        <img className="arrow-right-2" src={arrowRight} alt="" />
      </div>
      <Testimonials />
    </main >
  )
}
