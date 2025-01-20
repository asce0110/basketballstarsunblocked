import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Slope 3 Unblocked - Free Online Speed Run Game',
  description: 'Play Slope 3 unblocked online for free. Experience intense 3D speed running action with stunning graphics. Test your reflexes in this addictive ball rolling game!',
}

export default function Slope3Page() {
  return (
    <div className="space-y-6">
      <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Slope 3 Unblocked</h1>
        <div className="aspect-[16/9] w-full bg-gray-100 rounded-lg overflow-hidden mb-4">
          <iframe
            src="/api/embed/slope-3.embed"
            className="w-full h-full"
            allowFullScreen
          />
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="font-bold text-lg mb-3">About Slope 3</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Slope 3 is an intense 3D running game where you control a ball rolling down a steep slope. 
            Test your reflexes as you dodge obstacles, collect points, and try to reach the highest score. 
            With its stunning graphics and addictive gameplay, Slope 3 offers an adrenaline-pumping experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Game Features</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Fast-paced 3D gameplay</li>
                <li>• Increasing difficulty</li>
                <li>• Score system</li>
                <li>• Multiple levels</li>
                <li>• Stunning graphics</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Controls</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Arrow Keys: Control ball</li>
                <li>• A/D: Move left/right</li>
                <li>• Space: Jump</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h2 className="text-xl font-bold mb-4">Why Play Slope 3 Unblocked?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🎮 Addictive Gameplay</h3>
            <p className="text-sm text-gray-600">
              Experience the thrill of high-speed ball rolling with increasingly challenging obstacles and stunning 3D graphics.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🏆 Challenge Yourself</h3>
            <p className="text-sm text-gray-600">
              Test your reflexes and try to beat your high score as you navigate through increasingly difficult levels.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">⚡ Instant Play</h3>
            <p className="text-sm text-gray-600">
              No downloads required - jump right into the action and play Slope 3 unblocked in your browser.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h2 className="text-xl font-bold mb-4">How to Play Slope 3</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🎯 Basic Controls</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Use Arrow Keys to control the ball</li>
              <li>• Press A/D to move left/right</li>
              <li>• Use Space to jump over obstacles</li>
              <li>• Avoid hitting obstacles</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">💪 Pro Tips</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Look ahead for upcoming obstacles</li>
              <li>• Time your jumps carefully</li>
              <li>• Maintain momentum</li>
              <li>• Practice makes perfect</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🌟 Scoring</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Survive longer for higher scores</li>
              <li>• Collect points along the way</li>
              <li>• Beat your personal best</li>
              <li>• Compare with friends</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
} 