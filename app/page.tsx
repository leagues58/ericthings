import { ArticleList } from 'app/components/posts'
import { ArticleType } from './articles/utils'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4 tracking-tighter">
       My name is Eric Reeves. I'm a software developer, though I spend most of my time thinking about cars.
       <br/>I also like to think up ways to use software to improve my life, but I usually give up when I realize
       that the true ideal is to have no software at all.
       <br/><br/>Life would be better on a farm.
      </p>
      <div className="my-8">
        <span className='font-semibold text-2xl tracking-tighter'>Things I've Written</span>
        <ArticleList articleType={ArticleType.All} />
      </div>
    </section>
  )
}
