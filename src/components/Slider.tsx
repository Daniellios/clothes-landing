import React, { useRef, useState } from 'react'
import unisex from '../assets/images/unisex-label.svg'

const sliderImages = [
  { season: 'SS/20', code: 'THE CODE', oldPrice: '240EUR', newPrice: '144EUR', img: 'the-code' },
  { season: 'SS/20', code: 'DURAN', oldPrice: '300EUR', newPrice: '144EUR', img: 'duran' },
  { season: 'SS/20', code: 'CACTUS', oldPrice: '240EUR', newPrice: '144EUR', img: 'cactus' },
  { season: 'SS/20', code: 'THE EYE', oldPrice: '200EUR', newPrice: '154EUR', img: 'the-eye' },
  { season: 'SS/20', code: 'CARNERA', oldPrice: '245EUR', newPrice: '100EUR', img: 'carnera' },
  { season: 'SS/20', code: 'THE CODE', oldPrice: '240EUR', newPrice: '144EUR', img: 'the-code' },
  { season: 'SS/20', code: 'DURAN', oldPrice: '300EUR', newPrice: '144EUR', img: 'duran' },
  { season: 'SS/20', code: 'CACTUS', oldPrice: '240EUR', newPrice: '144EUR', img: 'cactus' },
  { season: 'SS/20', code: 'THE EYE', oldPrice: '200EUR', newPrice: '154EUR', img: 'the-eye' },
  { season: 'SS/20', code: 'CARNERA', oldPrice: '245EUR', newPrice: '100EUR', img: 'carnera' },
]

export const Slider = () => {
  const [isDown, setIsDown] = useState<boolean>(false)
  const [startX, setStartX] = useState<number>(0)
  const [scrollLeft, setScrollLeft] = useState<number>(0)

  const sliderRef = useRef<any>(null)

  const end = () => {
    setIsDown(false);
    if (sliderRef.current) {
      sliderRef!.current.classList.remove('active');
    }
  }

  const start = (e: any) => {
    setIsDown(true)
    sliderRef.current.classList.add('active');
    setStartX(e.pageX || e.touches[0].pageX - sliderRef.current.offsetLeft)
    setScrollLeft(sliderRef.current.scrollLeft)
  }

  const move = (e: any) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - sliderRef.current.offsetLeft;
    const dist = (x - startX);
    sliderRef.current.scrollLeft = scrollLeft - dist;

  }

  return (
    <div className="slider-wrap">
      <div className="slider">
        <div className="slider-inner" ref={sliderRef} onMouseDown={start} onMouseMove={move} onTouchMove={move} onMouseLeave={end} onMouseUp={end} onTouchEnd={end} onTouchStart={start}>
          {sliderImages.map((product, idx) =>
            <div className="card" key={idx}>
              <div className={`card-img-div ${product.img}`}></div>
              <img className="unisex" srcSet={unisex} alt="" />
              <div>{product.season}</div>
              <div>{product.code}</div>
              <div className="line-through">&euro; {product.oldPrice}</div>
              <div className='new-price'>&euro; {product.newPrice}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
