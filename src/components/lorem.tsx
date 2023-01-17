import { useEffect, useState } from "react"

export default function Lorem() {
  const [lorem, setLorem] = useState('')
  
  const GetLorem = async () => {
    setLorem((await (await fetch('http://localhost:3000/api/lorem')).json()).lorem)
  }

  useEffect(() => {
    GetLorem()
  }, [])

  return(
    <p className="text-6xl mt-8">{lorem}</p>
  )
}