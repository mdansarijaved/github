import React from 'react'

const Issues =async ({params}:{params:{slug:string}}) => {
    const response = await fetch(`https://api.github.com/repos/${params.slug}/issues`)
  return (
    <main>
        {params.slug}
    </main>
  )
}

export default Issues