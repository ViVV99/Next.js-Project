import { Fragment } from 'react'

// domain.com/news

function NewsPage() {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li><a href="/news/1">News</a></li>
            </ul>
        </Fragment>
    )
}

export default NewsPage