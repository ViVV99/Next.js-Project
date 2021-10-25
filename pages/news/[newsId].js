import { useRouter } from 'next/router'

// domain.com/news/dinamic

function Details() {
    const router = useRouter();

    const newsId = router.query.newsId;

    // send a request to fetch the news with the id that was given by the URL

    return <h1>Page of Details</h1>
}

export default Details