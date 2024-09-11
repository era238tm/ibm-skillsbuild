import { useEffect, useState } from 'react'

import Header from '../components/Header'
import Article from '../components/Article'

function Home() {
  const [articles, setArticles] = useState([] as ArticleType[])

  useEffect(() => {
    document.title = 'No Poverty';

    (async () => {
      const url = 'https://newsapi.org/v2/everything?' +
        'q=poverty&' +
        'searchIn=title&' +
        'sortBy=publishedAt&' +
        'pageSize=16&' +
        `apiKey=${import.meta.env.VITE_NewsAPI_KEY}`

      try {
        const response = await fetch(url)

        if (response.ok) {
          setArticles((await response.json() as NewsAPISuccess).articles)
        }
        else {
          const error = await response.json() as DefaultError
          console.error(`${error.code}: ${error.message}`)
        }
      }
      catch (error) {
        console.error(error as Error)
      }
    })()
  }, [])

  return (
    <>
      <Header></Header>

      <main className="container-fluid p-4">
        <div className="row justify-content-center" style={{ gap: "1.5rem" }}>{
          articles.map((article, index) => {
            return (
              <Article key={index} {...article}></Article>
            )
          })
        }</div>
      </main>
    </>
  )
}

export default Home
