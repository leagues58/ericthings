import { ArticleList } from 'app/components/posts'
import { ArticleType } from '../utils'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Tech Articles
      </h1>
      <div className="my-8">
        <ArticleList articleType={ArticleType.Tech} />
      </div>
    </section>
  )
}
