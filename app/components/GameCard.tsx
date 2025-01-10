import { Game } from '../types/game';
import Link from 'next/link';
import Image from 'next/image';

interface GameCardProps {
  game: Game;
  showRating?: boolean;
  showCategory?: boolean;
  showReleaseDate?: boolean;
  compact?: boolean;
}

export default function GameCard({ 
  game, 
  showRating = false, 
  showCategory = false,
  showReleaseDate = false,
  compact = false 
}: GameCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${compact ? 'p-2' : 'p-3'}`}>
      <Link href={`/games/${game.slug}`} className="block">
        <div className={`relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-2 ${compact ? 'mb-1' : 'mb-2'} group`}>
          <Image
            src={game.image}
            alt={game.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className={`font-bold text-gray-900 line-clamp-1 ${compact ? 'text-sm' : 'text-base'}`}>{game.title}</h3>
        <p className={`text-gray-600 line-clamp-2 mt-1 ${compact ? 'text-xs' : 'text-sm'}`}>{game.description}</p>
        {showRating && (
          <div className={`flex items-center mt-2 ${compact ? 'mt-1' : 'mt-2'}`}>
            <span className="text-yellow-400">★</span>
            <span className={`text-gray-600 ml-1 ${compact ? 'text-xs' : 'text-sm'}`}>{game.rating}</span>
          </div>
        )}
        {showCategory && (
          <div className={`mt-2 ${compact ? 'mt-1' : 'mt-2'}`}>
            <span className={`inline-block bg-blue-100 text-blue-800 rounded px-2 py-1 ${compact ? 'text-xs' : 'text-sm'}`}>
              {game.category}
            </span>
          </div>
        )}
        {showReleaseDate && (
          <div className={`text-gray-500 mt-2 ${compact ? 'mt-1 text-xs' : 'mt-2 text-sm'}`}>
            Added: {game.releaseDate}
          </div>
        )}
        <button className={`w-full mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${compact ? 'text-xs py-1' : 'text-sm py-2'}`}>
          Play Now
        </button>
      </Link>
    </div>
  );
} 