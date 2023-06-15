import { useEffect } from "react"

export default function useDarkMode() {

    useEffect(()=>{
        localStorage.setItem('theme', 'light')

    }, [])

  return (
    <div>useDarkMode</div>
  )
}
