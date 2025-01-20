import { getPopularGames } from './data/games'
import GameGrid from './components/GameGrid'
import CommentSection from './components/CommentSection'
import Image from 'next/image'

export default async function Home() {
  const popularGames = await getPopularGames()

  return (
    <div className="space-y-8">
      {/* Basketball Stars 主游戏区域 */}
      <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Basketball Stars Unblocked Games</h1>
        <div className="aspect-[16/9] w-full bg-gray-100 rounded-lg overflow-hidden mb-4">
          <iframe
            src="/api/embed/basketball-stars.embed"
            className="w-full h-full"
            allowFullScreen
          />
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="font-bold text-lg mb-3">About Basketball Stars</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Play Basketball Stars unblocked online for free! Experience the best multiplayer basketball game 
            with stunning graphics and smooth controls. Challenge players worldwide or play with friends locally.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Game Features</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Online multiplayer matches</li>
                <li>• Multiple game modes</li>
                <li>• Character customization</li>
                <li>• Global leaderboards</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Controls</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Arrow Keys: Move player</li>
                <li>• Spacebar: Shoot/Jump</li>
                <li>• S: Sprint</li>
                <li>• D: Defend</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 热门游戏区域 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Popular Games</h2>
        <GameGrid games={popularGames} showRating showCategory />
      </section>

      {/* 评论区域 */}
      <CommentSection />
    </div>
  )
}
