import { useEffect, useRef, useState } from "react"

interface AnimateInViewOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

function useAnimateInView<T extends HTMLElement>(
  options: AnimateInViewOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px", once = true } = options
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsInView(false)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, once])

  return { ref, isInView }
}

export default useAnimateInView
