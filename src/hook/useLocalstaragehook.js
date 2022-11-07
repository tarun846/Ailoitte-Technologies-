import { useEffect, useState } from "react"

export default function useLocalStorage(key, initialValue) {
  console.log('run');
   const [value, setValue] = useState()
 
   useEffect(() => {
     localStorage.setItem(key, JSON.stringify(value))
   }, [key, value])
 
   return [value, setValue]
 }