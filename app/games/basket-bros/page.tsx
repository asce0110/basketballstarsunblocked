import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Basket Bros Unblocked - Free Online Basketball Game',
  description: 'Play Basket Bros unblocked online for free. Experience intense 2D basketball action with multiplayer support. Challenge friends or play against players worldwide!',
}

export default function BasketBrosPage() {
  return (
    <div className="space-y-6">
      <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Basket Bros Unblocked</h1>
        <div className="aspect-[16/9] w-full bg-gray-100 rounded-lg overflow-hidden mb-4">
          <iframe
            src="https://basketball-stars.io/basket-bros.embed"
            className="w-full h-full"
            allowFullScreen
          />
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="font-bold text-lg mb-3">About Basket Bros</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Basket Bros brings a unique twist to basketball gaming with its 2D style and intense gameplay. 
            Challenge your friends in local multiplayer matches or take on players worldwide in online mode. 
            With simple controls but deep gameplay mechanics, every match is an exciting battle for basketball supremacy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Game Features</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 2D basketball action</li>
                <li>• Online and local multiplayer</li>
                <li>• Quick matches</li>
                <li>• Unique power-ups</li>
                <li>• Various game modes</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Controls</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-sm mb-1">Player 1:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>WASD: Move player</li>
                    <li>Space: Jump/Shoot</li>
                    <li>E: Block</li>
                    <li>Q: Special move</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-sm mb-1">Player 2:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Arrow Keys: Move</li>
                    <li>Enter: Jump/Shoot</li>
                    <li>O: Block</li>
                    <li>P: Special move</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h2 className="text-xl font-bold mb-4">Why Play Basket Bros Unblocked?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🎮 Unique Gameplay</h3>
            <p className="text-sm text-gray-600">
              Experience basketball like never before with our unique 2D perspective and arcade-style gameplay mechanics.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🏀 Multiplayer Fun</h3>
            <p className="text-sm text-gray-600">
              Challenge friends locally or compete against players worldwide in intense basketball matches.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">⚡ Power-ups</h3>
            <p className="text-sm text-gray-600">
              Collect and use various power-ups to gain advantages and create exciting gameplay moments.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h2 className="text-xl font-bold mb-4">How to Play Basket Bros</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🎯 Basic Moves</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Use WASD to move your player</li>
              <li>• Press Space to jump and shoot</li>
              <li>• Time your shots perfectly</li>
              <li>• Master the blocking timing</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">💪 Advanced Tips</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Combine moves for better results</li>
              <li>• Use power-ups strategically</li>
              <li>• Practice special moves</li>
              <li>• Learn to read opponents</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🏆 Game Modes</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Quick Match</li>
              <li>• Tournament Mode</li>
              <li>• Practice Mode</li>
              <li>• Custom Games</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
} 