interface GameEmbedProps {
  game: string;
  className?: string;
}

export default function GameEmbed({ game, className = '' }: GameEmbedProps) {
  return (
    <iframe
      src={`/api/embed/${game}`}
      className={`w-full aspect-video ${className}`}
      allowFullScreen
      scrolling="no"
    />
  );
} 