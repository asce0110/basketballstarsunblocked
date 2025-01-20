import { getPopularGames, getNewGames } from './data/games'
import GameGrid from './components/GameGrid'
import Image from 'next/image'

export default async function Home() {
  const popularGames = await getPopularGames()
  const newGames = await getNewGames()

  return (
    <div className="space-y-12">
      {/* Basketball Stars 主游戏区域 */}
      <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Basketball Stars Unblocked Games</h1>
        <div className="aspect-[16/9] w-full bg-gray-100 rounded-lg overflow-hidden mb-6">
          <iframe
            src="https://basketball-stars.io/1.embed"
            className="w-full h-full"
            allowFullScreen
          />
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="font-bold text-xl mb-4">About Basketball Stars</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Play Basketball Stars unblocked online for free! Experience the best multiplayer basketball game 
            with stunning graphics and smooth controls. Challenge players worldwide or play with friends locally.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-3">Game Features</h3>
              <ul className="text-base text-gray-600 space-y-2">
                <li>• Online multiplayer matches</li>
                <li>• Multiple game modes</li>
                <li>• Character customization</li>
                <li>• Global leaderboards</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-3">Controls</h3>
              <ul className="text-base text-gray-600 space-y-2">
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
        <h2 className="text-3xl font-bold mb-6">Popular Games</h2>
        <GameGrid games={popularGames} showRating showCategory />
      </section>

      {/* 新游戏区域 */}
      <section>
        <h2 className="text-3xl font-bold mb-6">New Games</h2>
        <GameGrid games={newGames} showRating showCategory showReleaseDate />
      </section>
    </div>
  )
}
