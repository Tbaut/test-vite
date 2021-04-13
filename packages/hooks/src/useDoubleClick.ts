import { useCallback, useEffect, useState } from "react"


interface Props {
    actionDoubleClick: () => void
    actionSingleClick: () => void
    delay?: number
}

export const useDoubleClick = ({ actionSingleClick, actionDoubleClick, delay = 250 }: Props): {click: () => void} => {
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      // simple click
      if (clickCount === 1) {
        actionSingleClick && actionSingleClick()
      }

      setClickCount(0)
    }, delay)

    // the duration between this click and the previous one
    // is less than the value of delay = double-click
    if (clickCount === 2) {
      actionDoubleClick && actionDoubleClick()
    }

    return () => clearTimeout(timer)
  }, [actionDoubleClick, actionSingleClick, clickCount, delay])

  const click = useCallback(() => {
    setClickCount((prev) => prev + 1)
  }, [])

  return { click }
}