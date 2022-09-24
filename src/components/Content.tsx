import React from "react"

export default function Content() {
    return (
        <article className="content">
            <h1 className="main--title">The content title</h1>
            <ul className="main--facts">
                <li>This is the first content. It needs to be quite long enough.</li>
                <li>This is the second content. It needs to be quite long enough.</li>
                <li>This is the third content. It needs to be quite long enough.</li>
            </ul>
        </article>
    )
}