import { getPopularGames } from '../data/games';
import GameCard from '../components/GameCard';

export default function PopularGames() {
  const games = getPopularGames();

  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-xl sm:text-3xl font-bold">Popular Games</h1>
        <p className="text-gray-600 text-sm mt-2">Discover our most played basketball games!</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {games.map((game) => (
          <GameCard
            key={game.slug}
            game={game}
            showRating={true}
            showCategory={true}
          />
        ))}
      </div>
    </div>
  );
} 