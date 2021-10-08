import React from 'react'
import Link from 'next/link'

function SwitchPreview({title, type, slug, image}) {
    return (
        <Link href={`/switch/${slug}`}>
            <div>
                <img src={image.url} width='200'/>
                <h1>{title}</h1>
                <p>{type}</p>
            </div>
        </Link>
    )
}

export default SwitchPreview
