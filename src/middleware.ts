/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";

// Text Styles
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';
const UNDERLINE = '\x1b[4m';

// Foreground (Text) Colors
const FG_BLACK = '\x1b[30m';
const FG_RED = '\x1b[31m';
const FG_GREEN = '\x1b[32m';
const FG_YELLOW = '\x1b[33m';
const FG_BLUE = '\x1b[34m';
const FG_MAGENTA = '\x1b[35m';
const FG_CYAN = '\x1b[36m';
const FG_WHITE = '\x1b[37m';

export function middleware(request: Request) {
  const response = NextResponse.next();
  const cookies = request.headers.get("cookie") || "";

  const isCurl = request.headers.get('user-agent')?.toLowerCase().includes('curl');

  if (isCurl) {
    const ansiMessage = `
  ${FG_WHITE}${BOLD}Hello from curl, my name is: ${RESET}
  ${FG_CYAN}
      ░█████            ░██                              
        ░██             ░██                              
        ░██   ░███████  ░████████   ░██████   ░████████  
        ░██  ░██    ░██ ░██    ░██       ░██  ░██    ░██ 
  ░██   ░██  ░██    ░██ ░██    ░██  ░███████  ░██    ░██ 
  ░██   ░██  ░██    ░██ ░██    ░██ ░██   ░██  ░██    ░██ 
   ░██████    ░███████  ░██    ░██  ░█████░██ ░██    ░██ 
  ${RESET}
  ${FG_WHITE}I am a Software Engineer based in Washington.${RESET}

  ${FG_WHITE}${BOLD}Links:${RESET}
  
      ${FG_BLUE}${BOLD}LinkedIn: ${RESET}${FG_WHITE}${UNDERLINE}https://linkedin.com/in/johan253${RESET}
      ${FG_MAGENTA}${BOLD}Github: ${RESET}${FG_WHITE}${UNDERLINE}https://github.com/johan253${RESET}
      ${FG_CYAN}${BOLD}Portfolio: ${RESET}${FG_WHITE}${UNDERLINE}https://johanhernandez.com${RESET}
      ${FG_RED}${BOLD}Email: ${RESET}${FG_WHITE}${UNDERLINE}johannjo2000@gmail.com${RESET}

  ${FG_YELLOW}${BOLD}Please visit my site from a browser for a better experience!${RESET}
  
`


    return new Response(ansiMessage, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    });
  }

  // Check if the visitorId cookie exists
  if (!cookies.includes("visitorId")) {
    const visitorId = crypto.randomUUID();

    response.cookies.set("visitorId", visitorId, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
  }
  return response;
}

export const config = {
  matcher: ["/"]
};
