import { Game } from '../types/game'
import GameCard from './GameCard'

interface GameGridProps {
  games: Game[]
  showRating?: boolean
  showCategory?: boolean
  showReleaseDate?: boolean
  compact?: boolean
}

export default function GameGrid({ 
  games,
  showRating = false,
  showCategory = false,
  showReleaseDate = false,
  compact = false
}: GameGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      {games.map((game) => (
        <GameCard
          key={game.slug}
          game={game}
          showRating={showRating}
          showCategory={showCategory}
          showReleaseDate={showReleaseDate}
          compact={compact}
        />
      ))}
    </div>
  )
} 