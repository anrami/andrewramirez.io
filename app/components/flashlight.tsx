"use client";

import { useEffect } from 'react'

export default function Flashlight() {
  useEffect(() => {
    const flashlight = document.createElement('div')
    flashlight.className = 'flashlight'
    document.body.appendChild(flashlight)

    const handleMouseMove = (event) => {
      flashlight.style.left = `${event.pageX}px`
      flashlight.style.top = `${event.pageY}px`
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.body.removeChild(flashlight)
    }
  }, [])

  return null
}