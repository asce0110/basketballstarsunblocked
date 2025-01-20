import { getPopularGames } from './data/games'
import GameGrid from './components/GameGrid'
import CommentSection from './components/CommentSection'

export default async function Home() {
  const popularGames = await getPopularGames()

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Popular Games</h2>
        <GameGrid games={popularGames} />
      </section>
      <CommentSection />
    </div>
  )
}
