import { useRouter } from 'next-intl/client'
import I18nLink from "../I18nLink"

export default function Card() {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/article-detail')
  }
  
  return <article className="">
    {/* Comment this H4 for reproducer useRouter error in the yarn test command */}
    <h4>
      <I18nLink
        href="/article-detail">
        Card Title 123
      </I18nLink>
    </h4>

    <button onClick={handleClick}>
        Card Title 123
    </button>
  </article>
}