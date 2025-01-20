import { Game } from '../types/game';
import { generateSlug } from '../utils/slug';

export const games: Game[] = [
  {
    title: "Basketball Stars",
    slug: "basketball-stars",
    description: "Play the original Basketball Stars game online!",
    longDescription: "Basketball Stars is an exciting multiplayer basketball game where you can compete against players from around the world. Show off your skills in quick matches, or climb the ranks in competitive mode. With smooth controls and stunning graphics, this game offers the best online basketball experience.",
    image: "https://s.basketballstarsunblocked.org/basketball-stars1-m240x240.jpg",
    url: "https://basketball-stars.io/1.embed",
    rating: 4.9,
    players: "1M+",
    category: "Multiplayer",
    features: [
      "Online multiplayer matches",
      "Multiple game modes",
      "Character customization",
      "Global leaderboards",
      "Achievement system"
    ],
    controls: [
      { key: "Arrow Keys", action: "Move player" },
      { key: "Spacebar", action: "Shoot/Jump" },
      { key: "S", action: "Sprint" },
      { key: "D", action: "Defend" }
    ],
    screenshots: [
      "/games/basketball-stars-1.jpg",
      "/games/basketball-stars-2.jpg",
      "/games/basketball-stars-3.jpg"
    ]
  },
  {
    title: "Slope 3",
    slug: "slope-3",
    description: "Play Slope 3 - The ultimate 3D speed run game!",
    longDescription: "Slope 3 is an intense 3D running game where you control a ball rolling down a steep slope. Test your reflexes as you dodge obstacles, collect points, and try to reach the highest score. With its stunning graphics and addictive gameplay, Slope 3 offers an adrenaline-pumping experience that will keep you coming back for more.",
    image: "https://s.basketballstarsunblocked.org/slope3.jpg",
    url: "/api/embed/slope-3.embed",
    rating: 4.8,
    players: "500K+",
    category: "Action",
    features: [
      "Fast-paced 3D gameplay",
      "Increasing difficulty",
      "Score system",
      "Multiple levels",
      "Stunning graphics"
    ],
    controls: [
      { key: "Arrow Keys", action: "Control ball" },
      { key: "A/D", action: "Move left/right" },
      { key: "Space", action: "Jump" }
    ]
  },
  {
    title: "Basketball Legends",
    slug: "basketball-legends",
    description: "Compete in epic basketball matches!",
    longDescription: "Basketball Legends takes you through the history of basketball, letting you play as some of the greatest players of all time. Experience legendary matches, create your own legacy, and become a basketball legend yourself.",
    image: "https://s.basketballstarsunblocked.org/basketball-legends3-m240x240.jpg",
    url: "#",
    rating: 4.7,
    players: "500K+",
    category: "Sports",
    features: [
      "Play as legendary players",
      "Historic matches recreation",
      "Career mode",
      "Local multiplayer",
      "Custom tournaments"
    ],
    controls: [
      { key: "WASD", action: "Move player" },
      { key: "J", action: "Shoot" },
      { key: "K", action: "Pass" },
      { key: "L", action: "Block" }
    ]
  },
  {
    title: "Basket Bros",
    slug: "basket-bros",
    description: "Experience intense 2D basketball action!",
    longDescription: "Basket Bros brings a unique twist to basketball gaming with its 2D style and intense gameplay. Challenge your friends in local multiplayer matches or take on players worldwide in online mode. With simple controls but deep gameplay mechanics, every match is an exciting battle for basketball supremacy.",
    image: "https://s.basketballstarsunblocked.org/basket-bros-m101x101.jpg",
    url: "https://basketball-stars.io/basket-bros.embed",
    rating: 4.8,
    players: "750K+",
    category: "Multiplayer",
    features: [
      "2D basketball action",
      "Online and local multiplayer",
      "Quick matches",
      "Unique power-ups",
      "Various game modes"
    ],
    controls: [
      { key: "WASD", action: "Move player" },
      { key: "Space", action: "Jump/Shoot" },
      { key: "E", action: "Block" },
      { key: "Q", action: "Special move" }
    ]
  },
  {
    title: "Basketball IO",
    slug: "basketball-io",
    description: "Multiplayer basketball fun!",
    longDescription: "Join the fast-paced world of Basketball IO, where you compete in real-time with players globally. Level up your character, unlock new abilities, and dominate the courts in this innovative take on basketball gaming.",
    image: "/games/basketball-io.jpg",
    url: "#",
    releaseDate: "2024-01-05",
    category: "Multiplayer",
    features: [
      "Real-time multiplayer",
      "Character progression",
      "Special abilities",
      "Daily challenges",
      "Friend system"
    ],
    controls: [
      { key: "Mouse", action: "Aim and shoot" },
      { key: "WASD", action: "Move player" },
      { key: "Q", action: "Special ability" },
      { key: "E", action: "Emote" }
    ]
  }
];

export async function getGameBySlug(slug: string): Promise<Game | undefined> {
  return games.find(game => game.slug === slug);
}

export async function getPopularGames(): Promise<Game[]> {
  return games.filter(game => game.rating && game.rating >= 4.5);
}

export async function getNewGames(): Promise<Game[]> {
  return games.filter(game => game.releaseDate).sort((a, b) => {
    if (a.releaseDate && b.releaseDate) {
      return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
    }
    return 0;
  });
}

// 添加一个函数来生成新游戏的 slug
export async function createGameSlug(title: string): Promise<string> {
  const slug = generateSlug(title);
  // 检查 slug 是否已存在
  const existingGame = await getGameBySlug(slug);
  if (existingGame) {
    // 如果存在，添加一个随机数
    return `${slug}-${Math.floor(Math.random() * 1000)}`;
  }
  return slug;
} 