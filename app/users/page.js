import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <div>

        <Link href='users/1'>
        <h1>User 1</h1>
        </Link>
        <Link href='users/2'>
        <h1>User 2</h1>
        </Link>
        <Link href='users/3'>
        <h1>User 3</h1>
        </Link>
        <Link href='users/4'>
        <h1>User 4</h1>
        </Link>
        <Link href='users/5'>
        <h1>User 5</h1>
        </Link>

      
    </div>
  )
}
