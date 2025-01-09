import GameCard from './components/GameCard';
import { getPopularGames } from './data/games';
import Link from 'next/link';
import SocialShare from './components/SocialShare';

export default async function Home() {
  const popularGames = await getPopularGames();

  return (
    <div className="space-y-8">
      {/* Hero Section with Three-Color Gradient */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Basketball Stars Unblocked Games</h1>
        <p className="text-lg mb-4">
          Welcome to the ultimate destination for Basketball Stars unblocked games! Play the best basketball games online without any restrictions. Experience fast-paced action, stunning graphics, and smooth gameplay that will keep you entertained for hours.
        </p>
        <div className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 p-4 rounded-lg">
          <p className="font-medium">🏀 Why Choose Basketball Stars Unblocked Games:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>No restrictions - play anywhere, anytime</li>
            <li>High-quality graphics and smooth gameplay</li>
            <li>Regular updates with new features</li>
            <li>Multiplayer support for competitive play</li>
          </ul>
        </div>
      </section>

      {/* Main Game Section */}
      <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Featured Game: Basketball Stars Unblocked</h2>
        <div className="aspect-[16/9] w-full bg-gray-100 rounded-lg overflow-hidden mb-4">
          <iframe
            src="https://basketball-stars.io/1.embed"
            className="w-full h-full"
            allowFullScreen
          />
        </div>
        <div className="border-t border-b py-4 my-4">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-3">Share Basketball Stars Unblocked Games! 🏀</h3>
            <div className="flex justify-center">
              <SocialShare 
                url="https://basketballstarsunblocked.org"
                title="Play Basketball Stars Unblocked - The Best Free Online Basketball Game!"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-bold mb-2">About Basketball Stars Unblocked</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            Basketball Stars unblocked is the premier online basketball game that lets you showcase your skills on the virtual court. Whether you&apos;re practicing your shots in single-player mode or competing against friends in multiplayer matches, this unblocked version ensures you can play without any network restrictions.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            With Basketball Stars unblocked games, you&apos;ll experience realistic basketball physics, intuitive controls, and exciting game modes that capture the true essence of basketball. Perfect your shooting technique, master defensive moves, and become the ultimate basketball star!
          </p>
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Popular Basketball Stars Unblocked Games</h2>
        <p className="text-gray-600 mb-4">
          Discover our most played Basketball Stars unblocked games, featuring intense matches and competitive gameplay. These games have been tested and loved by millions of players worldwide.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {popularGames.map((game) => (
            <GameCard
              key={game.slug}
              game={game}
              showRating={true}
              compact={true}
            />
          ))}
        </div>
      </section>

      {/* New Games Section */}
      <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">New Basketball Stars Unblocked Games</h2>
        <div className="text-center py-8">
          <div className="text-4xl mb-4">🏀</div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Coming Soon!</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We&apos;re working hard to bring you more exciting basketball games. Check back soon for new additions to our collection!
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">🎮 New Modes</h4>
              <p className="text-sm text-gray-600">Coming Soon</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">🌟 Features</h4>
              <p className="text-sm text-gray-600">Coming Soon</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">🏆 Tournaments</h4>
              <p className="text-sm text-gray-600">Coming Soon</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">🤝 Multiplayer</h4>
              <p className="text-sm text-gray-600">Coming Soon</p>
            </div>
          </div>
          <Link 
            href="/new" 
            className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">Why Choose Our Basketball Stars Unblocked Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🏀 Unblocked Access</h3>
            <p className="text-gray-600 text-sm">
              Play Basketball Stars unblocked games anywhere, anytime. No restrictions, no limitations - just pure basketball action at your fingertips.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🎮 Superior Gameplay</h3>
            <p className="text-gray-600 text-sm">
              Experience smooth, responsive controls and realistic basketball physics in every Basketball Stars unblocked game.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🌟 Regular Updates</h3>
            <p className="text-gray-600 text-sm">
              Our collection of Basketball Stars unblocked games is constantly growing with new features and improvements.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section with More Questions */}
      <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {/* About Basketball Stars Unblocked */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-600">What Is Basketball Stars Unblocked?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Basketball Stars is a fast-paced, arcade-style basketball game that brings the excitement of the court directly to your screen. 
              In this unblocked edition, you can enjoy:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              <li>Compete anytime on any network, even at school or work</li>
              <li>Skill-based gameplay with precise shots and slick dribbles</li>
              <li>Multiple game modes including quick matches and tournaments</li>
              <li>Cross-platform compatibility for gaming on any device</li>
              <li>Customizable players and upgradeable skills</li>
            </ul>
          </div>

          {/* Game Controls */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-600">Game Controls</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold mb-2">Player 1 Controls:</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>WASD: Move player around the court</li>
                  <li>Z: Shoot the ball / Jump for rebounds</li>
                  <li>X: Tackle opponents / Block shots</li>
                  <li>C: Special moves and tricks</li>
                  <li>V: Pass the ball to teammates</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold mb-2">Player 2 Controls:</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Arrow Keys: Move player around the court</li>
                  <li>K: Shoot the ball / Jump for rebounds</li>
                  <li>L: Tackle opponents / Block shots</li>
                  <li>M: Special moves and tricks</li>
                  <li>N: Pass the ball to teammates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Game Modes */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-600">Game Modes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold mb-2">Single Player Modes:</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Practice Mode: Perfect your skills</li>
                  <li>Career Mode: Rise through the ranks</li>
                  <li>Tournament Mode: Compete for trophies</li>
                  <li>Challenge Mode: Complete objectives</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold mb-2">Multiplayer Modes:</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Local 2-Player: Play with friends</li>
                  <li>Online Matches: Compete globally</li>
                  <li>Team Mode: Join forces with others</li>
                  <li>Ranked Mode: Climb the leaderboards</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Questions */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-600">Common Questions</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold mb-2">Getting Started</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm">Q: Is the game free to play?</p>
                    <p className="text-sm text-gray-600">A: Yes, completely free with no hidden costs or subscriptions.</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Q: Can I play without registration?</p>
                    <p className="text-sm text-gray-600">A: Yes, just open the game and start playing immediately.</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Q: How many players can play together?</p>
                    <p className="text-sm text-gray-600">A: Up to 2 players can play locally on the same device.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold mb-2">Technical Support</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm">Q: Which browsers are supported?</p>
                    <p className="text-sm text-gray-600">A: Chrome, Firefox, Safari, and Edge are fully supported.</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Q: Game is lagging, what can I do?</p>
                    <p className="text-sm text-gray-600">A: Try closing other tabs, clearing cache, or lowering graphics settings.</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Q: Can I play offline?</p>
                    <p className="text-sm text-gray-600">A: Internet connection is required for the best experience.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold mb-2">Gameplay</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm">Q: How do I score points?</p>
                    <p className="text-sm text-gray-600">A: Press Z/K to shoot when near the basket. Different positions score different points.</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Q: How do I defend?</p>
                    <p className="text-sm text-gray-600">A: Use X/L to block shots and steal the ball from opponents.</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Q: Are there different game modes?</p>
                    <p className="text-sm text-gray-600">A: Yes, including Quick Match, Tournament, and Practice modes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Device Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-600">Device Compatibility</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold mb-2">Desktop/Laptop</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Full keyboard controls</li>
                  <li>Best multiplayer experience</li>
                  <li>HD graphics support</li>
                  <li>Customizable settings</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold mb-2">Tablet</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Optimized touch controls</li>
                  <li>Landscape mode support</li>
                  <li>Adaptive interface</li>
                  <li>Gesture controls</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold mb-2">Mobile</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>One-handed mode</li>
                  <li>Touch-optimized UI</li>
                  <li>Data-saving mode</li>
                  <li>Portrait mode support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
