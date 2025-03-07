import { ArticleList } from 'app/components/posts'
import { ArticleType } from '../utils'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Auto Articles
      </h1>
      <div className="my-8">
        <ArticleList articleType={ArticleType.Auto} />
      </div>
    </section>
  )
}
