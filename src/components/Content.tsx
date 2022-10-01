import React from "react"

interface ContentProps {
    gridColumn: number
    articleId: number
}

export default function Content(prop:ContentProps) {
    const span = 'span ' + prop.gridColumn 
    const style = {'gridColumn': '3 / '+ span}
    return (
        <article className="content" style={style}>
            <h1 className="main--title">The content title {prop.articleId}</h1>
            <ul className="main--facts">
                <li>This is the first content. It needs to be quite long enough.</li>
                <li>This is the second content. It needs to be quite long enough.</li>
                <li>This is the third content. It needs to be quite long enough.</li>
            </ul>
        </article>
    )
}