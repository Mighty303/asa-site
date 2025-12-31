"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface CountUpProps {
  from?: number
  to: number
  duration?: number
  separator?: string
  direction?: "up" | "down"
  className?: string
  suffix?: string
}

export default function CountUp({
  from = 0,
  to,
  duration = 2,
  separator = "",
  direction = "up",
  className = "",
  suffix = ""
}: CountUpProps) {
  const [count, setCount] = useState(direction === "up" ? from : to)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  useEffect(() => {
    if (!inView) return

    const startValue = direction === "up" ? from : to
    const endValue = direction === "up" ? to : from
    const range = endValue - startValue
    const increment = range / (duration * 60) // 60 fps
    
    let current = startValue
    const timer = setInterval(() => {
      current += increment
      if (
        (direction === "up" && current >= endValue) ||
        (direction === "down" && current <= endValue)
      ) {
        setCount(endValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [inView, from, to, duration, direction])

  const formatNumber = (num: number) => {
    if (separator) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    }
    return num.toString()
  }

  return (
    <span ref={ref} className={className}>
      {formatNumber(count)}
      {suffix}
    </span>
  )
}
