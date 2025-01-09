import { getGameBySlug } from '@/app/data/games';
import { notFound } from 'next/navigation';

export default function GamePage({ params }: { params: { slug: string } }) {
  const game = getGameBySlug(params.slug);

  if (!game) {
    notFound();
  }

  return (
    <div className="space-y-8">
      {/* Game Title and Rating */}
      <div className="border-b pb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">{game.title}</h1>
          {game.rating && (
            <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
              <span className="text-yellow-500 text-xl mr-1">★</span>
              <span className="font-medium">{game.rating}</span>
            </div>
          )}
        </div>
        {game.category && (
          <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mt-2">
            {game.category}
          </span>
        )}
      </div>

      {/* Game Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Game Frame */}
          <div className="aspect-[16/9] w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={game.url}
              className="w-full h-full"
              allowFullScreen
            />
          </div>

          {/* Description */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">About the Game</h2>
            <p className="text-gray-600 leading-relaxed">
              {game.longDescription || game.description}
            </p>
          </div>

          {/* Features */}
          {game.features && (
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {game.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Game Info */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">Game Information</h2>
            <div className="space-y-3">
              {game.players && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Players</h3>
                  <p className="text-gray-900">{game.players}</p>
                </div>
              )}
              {game.releaseDate && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Release Date</h3>
                  <p className="text-gray-900">
                    {new Date(game.releaseDate).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Controls */}
          {game.controls && (
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-bold mb-4">Game Controls</h2>
              <div className="space-y-3">
                {game.controls.map((control, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium bg-gray-100 px-2 py-1 rounded">
                      {control.key}
                    </span>
                    <span className="text-gray-600">{control.action}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Screenshots */}
      {game.screenshots && (
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {game.screenshots.map((screenshot, index) => (
              <div key={index} className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Screenshot {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 