import React from "react"
import { render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import Hero from "../landing_page/home/Hero"



describe('Hero Component', ()=>{
  test('renders hero image',()=>{
    render(<Hero/>)
    const heroImages = screen.getAllByAltText("Hero Image")
    expect(heroImages.length).toBeGreaterThan(0)
    expect(heroImages[0]).toBeInTheDocument()
    expect(heroImages[0]).toHaveAttribute('src','media/Images/homeHero.png')
  })
})