import { NextResponse } from 'next/server'

interface GameEmbed {
  [key: string]: string;
}

// 游戏源地址映射
const gameSourceMap: GameEmbed = {
  'slope-3': 'https://games-online.io/game/Slope3/',
  'basketball-stars': 'https://games.basketballstarsunblocked.org/game/BasketballStars/',
  'basket-bros': 'https://games.basketballstarsunblocked.org/game/BasketBros/'
}

export async function GET(
  request: Request,
  { params }: { params: { game: string } }
) {
  // 移除.embed后缀以获取游戏名称
  const game = params.game.replace(/\.embed$/, '')
  const gameUrl = gameSourceMap[game]

  if (!gameUrl) {
    return new NextResponse('Game not found', { status: 404 })
  }

  // 生成嵌入HTML
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${game}</title>
        <style>
          body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #000;
          }
          iframe {
            width: 100%;
            height: 100%;
            border: none;
          }
          .game-container {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .loading {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-family: Arial, sans-serif;
            z-index: 1;
            transition: opacity 0.3s ease;
          }
          #game-frame {
            position: relative;
            z-index: 2;
          }
        </style>
      </head>
      <body>
        <div class="game-container">
          <div id="loading" class="loading">Loading...</div>
          <iframe 
            id="game-frame"
            src="${gameUrl}"
            allowfullscreen="true"
            scrolling="no"
          ></iframe>
        </div>
        <script>
          document.getElementById('game-frame').onload = function() {
            document.getElementById('loading').style.display = 'none';
          };
        </script>
      </body>
    </html>
  `

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "frame-ancestors 'self' https://basketballstarsunblocked.org",
    },
  })
} 