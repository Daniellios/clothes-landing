import React, { useEffect, useState } from 'react'

const data = [
  {
    name: 'Jamie K Cohen',
    quote: 'Déplacé Maison is a convincer for anticipation. The urban trekking as nevers seen before. An exceptional product that has no equal alongside a great team represent the brand professionally.'
  },
  {
    name: 'William Gibson',
    quote: 'Good things come to those who wait – Déplacé Maison is what has been missing in the modern fashion industry for years. Buy a shoe of high quality and design it finally happened.'
  }
]

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  useEffect(() => {
    let inter = setInterval(() => {
      if (activeIndex === 1) {
        setActiveIndex(0)
      } else {
        setActiveIndex(1)
      }
    }, 5000)

    return () => clearInterval(inter)
  }, [activeIndex])
  return (
    <div className="testimonials">
      <p className="testimonial-name">{data[activeIndex].name}</p>
      <p className="testimonial-quote">{data[activeIndex].quote}</p>
    </div>
  )
}
