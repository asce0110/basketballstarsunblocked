import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basketball Legends Unblocked - Free Online Basketball Game',
  description: 'Play Basketball Legends unblocked online for free. Experience classic basketball action with multiplayer support. No downloads required, play instantly in your browser!',
}

export default function BasketballLegendsPage() {
  return (
    <div className="space-y-6">
      <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Basketball Legends Unblocked</h1>
        <div className="aspect-[16/9] w-full bg-gray-100 rounded-lg overflow-hidden mb-4">
          <iframe
            src="https://basketball-stars.io/basketball-legends.embed"
            className="w-full h-full"
            allowFullScreen
          />
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="font-bold text-lg mb-3">About Basketball Legends</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Basketball Legends is a thrilling arcade-style basketball game that lets you play as legendary basketball players. 
            This unblocked version ensures you can enjoy the game anywhere, anytime, without any restrictions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Game Features</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Play as legendary basketball players</li>
                <li>• Multiple game modes and tournaments</li>
                <li>• Local multiplayer support</li>
                <li>• Unlock special moves and abilities</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Controls</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-sm mb-1">Player 1:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>WASD: Move</li>
                    <li>Z: Shoot/Jump</li>
                    <li>X: Block/Steal</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-sm mb-1">Player 2:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Arrows: Move</li>
                    <li>K: Shoot/Jump</li>
                    <li>L: Block/Steal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h2 className="text-xl font-bold mb-4">How to Play Basketball Legends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🎮 Getting Started</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>1. Choose your legendary player</li>
              <li>2. Select game mode (Single or Multiplayer)</li>
              <li>3. Learn the basic controls</li>
              <li>4. Start your first match</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">⚡ Pro Tips</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Master the timing of your shots</li>
              <li>• Use blocks to defend effectively</li>
              <li>• Learn special moves combinations</li>
              <li>• Practice dribbling techniques</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🏆 Winning Strategies</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Keep moving to find open shots</li>
              <li>• Time your blocks carefully</li>
              <li>• Use the full court space</li>
              <li>• Mix up your offensive moves</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
} 