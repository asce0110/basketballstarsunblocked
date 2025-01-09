import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basketball Stars Unblocked Games - Play Free Online',
  description: 'Play Basketball Stars unblocked games online for free. Experience fast-paced basketball action with stunning graphics and multiplayer support. No downloads required!',
}

export default function BasketballStarsPage() {
  return (
    <div className="space-y-6">
      <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Basketball Stars Unblocked Games</h1>
        <div className="aspect-[16/9] w-full bg-gray-100 rounded-lg overflow-hidden mb-4">
          <iframe
            src="https://basketball-stars.io/1.embed"
            className="w-full h-full"
            allowFullScreen
          />
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="font-bold text-lg mb-3">About Basketball Stars Unblocked Games</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Basketball Stars Unblocked Games brings you the ultimate basketball gaming experience. Play anywhere, anytime without restrictions, 
            and enjoy fast-paced basketball action with stunning graphics and smooth gameplay.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Game Features</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Unblocked access - play anywhere</li>
                <li>• Multiple game modes and tournaments</li>
                <li>• Local and online multiplayer</li>
                <li>• High-quality graphics</li>
                <li>• Regular updates with new content</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Controls</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-sm mb-1">Player 1:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>ASWD: Move player</li>
                    <li>Z: Tackle opponents</li>
                    <li>X: Hurdle</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-sm mb-1">Player 2:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Arrow Keys: Move player</li>
                    <li>K: Tackle opponents</li>
                    <li>L: Hurdle</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h2 className="text-xl font-bold mb-4">Why Choose Basketball Stars Unblocked Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🎮 Unrestricted Access</h3>
            <p className="text-sm text-gray-600">
              Play Basketball Stars unblocked games anywhere, anytime. No restrictions or limitations - just pure basketball action at your fingertips.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🏀 Superior Gameplay</h3>
            <p className="text-sm text-gray-600">
              Experience realistic basketball physics, responsive controls, and smooth gameplay that makes every match exciting.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🌟 Regular Updates</h3>
            <p className="text-sm text-gray-600">
              Enjoy frequent updates with new features, game modes, and improvements to enhance your gaming experience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h2 className="text-xl font-bold mb-4">How to Play Basketball Stars Unblocked Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🎯 Basic Controls</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Player 1: ASWD keys to move player</li>
              <li>• Player 1: Z to tackle opponents, X to hurdle</li>
              <li>• Player 2: Arrow keys to move player</li>
              <li>• Player 2: K to tackle opponents, L to hurdle</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">💪 Pro Tips</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Time your shots perfectly</li>
              <li>• Practice defensive timing</li>
              <li>• Learn special moves</li>
              <li>• Use the full court space</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🏆 Game Modes</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Quick Match</li>
              <li>• Tournament Mode</li>
              <li>• Practice Mode</li>
              <li>• Multiplayer Matches</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
} 