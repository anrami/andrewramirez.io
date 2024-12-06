"use client";

import { useEffect } from 'react'

export default function Flashlight() {
  useEffect(() => {
    const flashlight = document.createElement('div')
    flashlight.className = 'flashlight'
    document.body.appendChild(flashlight)

    const handleMouseMove = (event) => {
      // Use clientX/Y instead of pageX/Y to be viewport-relative
      flashlight.style.left = `${event.clientX}px`
      flashlight.style.top = `${event.clientY}px`
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.body.removeChild(flashlight)
    }
  }, [])

  return null
}