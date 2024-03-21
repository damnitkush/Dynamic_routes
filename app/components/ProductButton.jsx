'use client'

import { useRouter } from "next/navigation"

export default function ProductButton({id}) {
//routes to the particular item
    const router = useRouter();


    function handleClick(){
        router.push(`/products/${id}`)
    }


  return (

    <button onClick={handleClick}>
        Go to Product
    </button>
 
  )
}
