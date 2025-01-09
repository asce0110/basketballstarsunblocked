import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Basketball Games Coming Soon - Basketball Stars Unblocked',
  description: 'Stay tuned for new basketball games! More exciting unblocked basketball games are coming to Basketball Stars. Check back soon for updates.',
}

export default function NewGamesPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6 max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="text-6xl mb-4">🏀</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">New Games Coming Soon!</h1>
        <p className="text-lg text-gray-600">
          We're working hard to bring you more exciting basketball games. Check back soon for new additions to our collection!
        </p>
        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h2 className="text-xl font-bold text-blue-900 mb-4">What to Expect</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-bold text-blue-800 mb-2">🎮 New Game Modes</h3>
              <p className="text-sm text-gray-600">
                Exciting new game modes and challenges coming to test your skills
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-bold text-blue-800 mb-2">🌟 Special Features</h3>
              <p className="text-sm text-gray-600">
                Enhanced gameplay mechanics and special moves to master
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-bold text-blue-800 mb-2">🏆 Tournaments</h3>
              <p className="text-sm text-gray-600">
                Competitive tournaments with rewards and leaderboards
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-bold text-blue-800 mb-2">🤝 Multiplayer</h3>
              <p className="text-sm text-gray-600">
                New multiplayer features for playing with friends
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-sm text-gray-500">
            Want to be notified when new games are available? Follow us on social media for updates!
          </p>
        </div>
      </div>
    </div>
  )
} 