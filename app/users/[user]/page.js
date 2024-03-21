import React from 'react'

export default function page(params) {
    console.log(params.user);
  return (
    <div>
        User:{params.user}
      
    </div>
  )
}
