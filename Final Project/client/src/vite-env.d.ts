/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NewsAPI_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface DefaultError {
  status: string
  code: string
  message: string
}

interface NewsAPISuccess {
  status: string
  totalResults: number
  articles: ArticleType[]
}

interface ArticleType {
  source: {
    id: string | null
    name: string
  }
  author: string | null
  title: string
  description: string | null
  url: string
  urlToImage: string | null
  publishedAt: Date
  content: string
}

interface ServerSuccess {
  status: string
  totalResults: number
  projects: ProjectType[]
}

interface ProjectType {
  title: string
  description: string | null
  datetime: Date
  location: string
}
