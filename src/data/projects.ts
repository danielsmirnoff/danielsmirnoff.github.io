import type { Project, CategoryInfo } from "../types";

export const categories: CategoryInfo[] = [
  {
    slug: "commercial-games",
    title: "Commercial Games",
    description:
      "Professional shipped titles, contract work, and published games built in collaboration with individuals or large teams.",
  },
  {
    slug: "personal-projects",
    title: "Personal Projects",
    description:
      "Technical experiments and passionate side projects built to learn and explore new mechanics or systems.",
  },
  {
    slug: "game-jams",
    title: "Game Jams",
    description:
      "Rapid prototyping under tight deadlines. Focused on scoping, quick iteration, and delivering a playable experience anywhere from 3 days to 2 weeks.",
  },
  // {
  //   slug: "other",
  //   title: "Other",
  //   description: "Other random projects I've worked on for fun.",
  // },
];

// Section titles used throughout: Overview / My Role / Technical Highlights / Team / Results
// Tag style: Title Case, hyphenated compounds (Roguelike, Trading-Sim, Top-Down, Turn-Based)

export const projects: Project[] = [
  {
    slug: "you-suck-at-football",
    date: "2025",
    status: "finished",
    category: "commercial-games",
    title: "You Suck at Football",
    tags: ["Unreal Engine", "Multiplayer", "3D"],
    thumbnail: { type: "image", src: "/src/assets/images/projects/football/football_thumbnail.jpeg" },
    description: "A co-op rage game about carrying a football up a treacherous path.",
    heroImage: { type: "youtube", videoId: "Hj4940py_9Q" },
    lead: "A co-op rage game where you have to bring a football up a winding, dangerous path.",
    links: [
      { text: "Steam", url: "https://store.steampowered.com/app/3842740/You_Suck_At_Football/", type: "outline" },
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "I was invited to work on this game as a level designer by the YouTuber GorkaGames after he saw my work in a game jam. I was given a few obstacles and the task of designing the level from scratch.",
          "I started the blockout using a custom path generator I created. The game launched with my blockout layout as the first level.",
        ],
      },
      {
        title: "My Role",
        list: [
          "Level design and layout.",
          "Built level design tools to create the blockout for the first level quickly.",
          "Fixed bugs related to the obstacles.",
        ],
      },
      {
        title: "Technical Highlights",
        // TODO: add a short GIF or screenshot of the tools, plus detail on how the path generator and PCG work.
        list: [
          "Custom level tooling to create paths",
          "Custom PCG system to place grass along paths",
        ],
      },
      {
        title: "Results",
        list: ["1,000+ downloads on Steam"],
      },
    ],
    gallery: [
      { type: "image", src: "/src/assets/images/projects/football/football_01.jpg" },
      { type: "image", src: "/src/assets/images/projects/football/football_02.jpg" },
      { type: "image", src: "/src/assets/images/projects/football/football_03.jpg" },
    ],
  },
  {
    slug: "beybleed-arena",
    date: "2026",
    status: "finished",
    category: "game-jams",
    title: "Beybleed Arena",
    tags: ["Unity", "Roguelike", "Beyblade"],
    thumbnail: { type: "image", src: "/src/assets/images/projects/beybleed/beybleed_thumbnail.png" },
    description: "A Beyblade-like roguelike: rip through enemies, upgrade your blade and survive 9 rounds.",
    heroImage: { type: "youtube", videoId: "IARKQ_5atz4" },
    lead: "A Beyblade-like roguelike where you rip and spin through enemies, upgrade your blade and survive all 9 rounds.",
    links: [{ text: "Play", url: "https://dandadev.itch.io/beybleedarena", type: "outline" }],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This project was built in 7 days for the Very Serious Game Jam. I worked with a very talented team and was the sole programmer, with some additional help from our composer. Yes, it features Ryan Gosling.",
        ],
      },
      {
        title: "Technical Highlights",
        list: [
          "Dependency injection using the Init(args) package",
          "Efficient use of design patterns such as the Strategy pattern to implement upgrades, and the pipeline pattern to handle damage calculation."
        ],
      },
      {
        title: "Team",
        list: ["Art: possumxking, Kismet.psd", "Sound Design: Hovig Sarkissian", "Composer: Joshua Wheeler"],
      },
    ],
    gallery: [
      { type: "image", src: "/src/assets/images/projects/beybleed/beybleed_01.png" },
      { type: "image", src: "/src/assets/images/projects/beybleed/beybleed_02.png" },
    ],
  },
  {
    slug: "caravan-trader",
    date: "2026",
    status: "finished",
    category: "game-jams",
    title: "Caravan Trader (Jam Version)",
    tags: ["Unity", "Trading-Sim"],
    thumbnail: { type: "image", src: "/src/assets/images/projects/caravan/caravan_thumbnail.png" },
    description: "A cozy trading sim about flipping items between towns.",
    heroImage: { type: "youtube", videoId: "Z6-VXz9MkvE" },
    lead: "A cozy trading-sim game where you can travel between towns, flip items for profit, upgrade your caravan and fight off enemies.",
    links: [{ text: "Play", url: "https://dandadev.itch.io/traderscaravan", type: "outline" }],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This game was made in 7 days for the Brackeys 2026.1 game jam. The theme was Strange Lands, and we came up with the idea of a trader traveling strange lands, flipping items for profit and fighting off enemies.",
        ],
      },
      {
        title: "Post-Jam",
        paragraphs: [
          "After the jam we realized the concept had real potential, so we started on a version with a much larger scope and far more complex, detailed systems.",
          "See the full version's project page for the post-jam progress.",
        ],
      },
      // TODO: add a "My Role" and "Technical Highlights" section for the jam version.
      {
        title: "Results",
        list: ["20th out of 1,400 entries"],
      },
      {
        title: "Team",
        list: ["Art: possumxking", "Composer: Joshua Wheeler"],
      },
    ],
    gallery: [
      { type: "image", src: "/src/assets/images/projects/caravan/caravan_01.png" },
      { type: "image", src: "/src/assets/images/projects/caravan/caravan_02.png" },
      { type: "image", src: "/src/assets/images/projects/caravan/caravan_03.png" },
      { type: "image", src: "/src/assets/images/projects/caravan/caravan_04.png" },
    ],
  },
  {
    slug: "puppet-masker",
    date: "2026",
    status: "finished",
    category: "game-jams",
    title: "Puppet Masker",
    tags: ["Unity", "Roguelike", "Top-Down", "Survivors-Like"],
    thumbnail: { type: "image", src: "/src/assets/images/projects/puppet/puppet_thumbnail.png" },
    description: "Battle enemies, collect masks and grow your army of puppets.",
    heroImage: { type: "youtube", videoId: "arS1eUidJB0" },
    lead: "A roguelike where you battle enemies, collect masks and grow your army of puppets.",
    links: [{ text: "Play", url: "https://dandadev.itch.io/puppetmasker", type: "outline" }],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This game was made in 3 days for the San Jose State University game dev club jam. You run around battling puppets and collecting shards from them. Collecting enough shards lets you roll for a mask, and throwing a mask at an enemy makes it fight for you with a unique mask ability.",
          "I worked with a team of three others: two artists and a second programmer. I was the lead programmer, with additional help from the other programmer. It's also funny because I didn't even attend this school; my mutual friend, the club president, invited me and I joined for fun.",
        ],
      },
      {
        title: "Technical Highlights",
        list: ["Object-pooling bullet manager", "Strategy pattern for different abilities"],
      },
      {
        title: "Team",
        list: ["Art: end3rguy", "Environment & UI Art: Cakedust", "Programming: Garogorl"],
      },
    ],
    gallery: [
      { type: "image", src: "/src/assets/images/projects/puppet/puppet_01.png" },
      { type: "image", src: "/src/assets/images/projects/puppet/puppet_02.png" },
      { type: "image", src: "/src/assets/images/projects/puppet/puppet_03.png" },
      { type: "image", src: "/src/assets/images/projects/puppet/puppet_04.png" },
    ],
  },
  {
    slug: "excarnate",
    date: "2025",
    status: "finished",
    category: "game-jams",
    title: "Excarnate",
    tags: ["Unity", "Roguelike", "Card Battler"],
    thumbnail: { type: "image", src: "/src/assets/images/projects/excarnate/excarnate_thumbnail.png" },
    description: "A roguelike card battler set in a dark dungeon.",
    heroImage: { type: "youtube", videoId: "Q4ucQP57asA" },
    lead: "A roguelike card battler where you traverse a dark dungeon, collect cards, battle enemies and grow your army.",
    links: [{ text: "Play", url: "https://dandadev.itch.io/excarnate", type: "outline" }],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This game was made in 3 days for the Jamsepticeye game jam. We overscoped a bit for a 3-day jam, but it was a lot of fun to make. We all love card games, and the result came out fun to play.",
          "We kept working on the game after the jam, hoping to turn it into a Steam release, but abandoned it when the scope grew out of hand.",
        ],
      },
      // TODO: add Technical Highlights (card system, enemy/battle flow, etc.).
      {
        title: "Team",
        list: ["Art: pixelmage", "Audio: Joshua Wheeler"],
      },
    ],
    gallery: [
      { type: "image", src: "/src/assets/images/projects/excarnate/excarnate_01.png" },
      { type: "image", src: "/src/assets/images/projects/excarnate/excarnate_02.png" },
      { type: "image", src: "/src/assets/images/projects/excarnate/excarnate_03.png" },
    ],
  },
  {
    slug: "underground-hog-day",
    date: "2025",
    status: "finished",
    category: "game-jams",
    title: "Underground-Hog Day",
    tags: ["Godot", "Roguelike", "2D", "Incremental"],
    thumbnail: { type: "image", src: "/src/assets/images/projects/hog/hog_thumbnail.png" },
    description: "An incremental mining roguelike about a groundhog stuck in a time loop.",
    heroImage: { type: "youtube", videoId: "i8PuMY027KM" },
    lead: "An incremental roguelike mining game where you play as a groundhog stuck in a time loop.",
    links: [{ text: "Play", url: "https://dandadev.itch.io/underground-hog-day", type: "outline" }],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This game was incredibly fun to work on, and the concept turned out great. You're a groundhog stuck in a Groundhog Day time loop, so the same day repeats over and over. Mine as much as you can before the day restarts, then sell what you find to upgrade yourself and eventually reach the exit.",
          "It was made in 3 days for GMTK 2025 with an artist and a composer, both friends who had never taken part in a game jam before.",
        ],
      },
      {
        title: "Technical Highlights",
        list: [
          "Level generation: a custom generator creates the entire underground. It places random ore chunks using Perlin noise, with a step function that puts common ores near the spawn and rarer ones farther away.",
          "Upgrade system: built on the Strategy pattern so new abilities are easy to add.",
        ],
      },
      {
        title: "Results",
        list: ["25th for Enjoyment out of 9,000 entries"],
      },
      {
        title: "Team",
        list: [
          "Art: Nathan Walsh",
          "Audio: Caleb Mccall"
        ]
      }
    ],
    gallery: [
      { type: "image", src: "/src/assets/images/projects/hog/hog_01.png" },
      { type: "image", src: "/src/assets/images/projects/hog/hog_02.png" },
    ],
  },
  {
    slug: "soul-below",
    date: "2024",
    status: "finished",
    category: "game-jams",
    title: "Soul Below",
    tags: ["Unity", "Roguelike", "2D", "Bullet Hell"],
    thumbnail: { type: "image", src: "/src/assets/images/projects/soul/soul_thumbnail.png" },
    description: "Play as the reaper, collect lost souls and escape purgatory.",
    heroImage: { type: "youtube", videoId: "jLaW8sDsm9Q" },
    lead: "A roguelike where you play as the reaper collecting lost souls. Upgrade your gun, defeat enemies and escape purgatory.",
    links: [{ text: "Play", url: "https://dandadev.itch.io/soul-below", type: "outline" }],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This game was made in 1 week for a game jam at my school's game dev club. I worked with a team of two others, an artist and a composer. It was a lot of fun to make and to play, and many people enjoyed it and even asked for a full game.",
        ],
      },
      // TODO: add Technical Highlights.
      {
        title: "Results",
        list: ["1st place in the club game jam"],
      },
      {
        title: "Team",
        list: [
          "Art & Writing: Jaazanias 'JJ' Marin Molina",
          "Audio: Patrick Oliver"
        ]
      }
    ],
    gallery: [{ type: "image", src: "/src/assets/images/projects/soul/soul_01.png" }],
  },
  {
    slug: "mcbooms-kaboom",
    date: "2024",
    status: "finished",
    category: "game-jams",
    title: "McBooms Kaboom",
    tags: ["Unity", "Puzzle", "2D", "Platformer"],
    thumbnail: { type: "image", src: "/src/assets/images/projects/booms/booms_thumbnail.png" },
    description: "Escape a clocktower before it blows up using a time-bending ability.",
    heroImage: { type: "youtube", videoId: "bi9BAZdA6dQ" },
    lead: "A time-based puzzle platformer: escape the clocktower before it blows up with a unique time-bending ability.",
    links: [{ text: "Play", url: "https://dandadev.itch.io/mcbooms-kaboom", type: "outline" }],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This game was made in a week at my school's game dev club jam, with a team of three others: one programmer, one artist/writer and one composer. It was my first in-person game jam, which made it especially fun to develop.",
        ],
      },
      {
        title: "Technical Highlights",
        list: [
          "Time reversal: tracks every object affected by time and replays its actions when time runs backwards.",
          "Physics-based obstacles: pistons that extend and retract, rotating gears, buttons, 2D physics objects and movable platforms.",
        ],
      },
      {
        title: "Results",
        list: ["1st place in the club game jam"],
      },
      {
        title: "Team",
        list: [
          "Programming: Me & Lucky F. Santos",
          "Art & Writing: Jaazanias 'JJ' Marin Molina",
          "Audio: Patrick Oliver"
        ]
      }
    ],
    gallery: [
      { type: "image", src: "/src/assets/images/projects/booms/booms_01.png" },
      { type: "image", src: "/src/assets/images/projects/booms/booms_02.png" },
    ],
  },
  {
    slug: "merge-defense",
    date: "2024",
    status: "finished",
    category: "game-jams",
    title: "Merge Defense",
    tags: ["Unity", "Tower Defense", "2D", "Pixel-Art"],
    thumbnail: { type: "image", src: "/src/assets/images/projects/merge/merge_thumbnail.png" },
    description: "Merge towers to upgrade them in this tower defense game.",
    heroImage: { type: "youtube", videoId: "EVbj67i7Bcw" },
    lead: "A tower defense game that mixes a fantasy dungeon aesthetic with sci-fi, where you merge towers to upgrade them.",
    links: [{ text: "Play", url: "https://dandadev.itch.io/merge-defense", type: "outline" }],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This was my solo submission for the GMTK 2024 game jam. I wanted to experiment with the tower defense genre, so I mixed a fantasy dungeon aesthetic with sci-fi. It was a fun experiment, and building extendable systems was the highlight.",
        ],
      },
      {
        title: "Technical Highlights",
        list: [
          "A round-based enemy spawning system built with ScriptableObjects for easy iteration.",
          "An ability system for towers built with the Strategy pattern for extendability.",
        ],
      },
    ],
    gallery: [
      { type: "image", src: "/src/assets/images/projects/merge/merge_01.png" },
      { type: "image", src: "/src/assets/images/projects/merge/merge_02.png" },
      { type: "image", src: "/src/assets/images/projects/merge/merge_03.png" },
    ],
  },
  {
    slug: "the-knights-rescue",
    date: "2024",
    status: "finished",
    category: "game-jams",
    title: "The Knights Rescue",
    tags: ["Unity", "Platformer", "Puzzle"],
    thumbnail: { type: "image", src: "/src/assets/images/projects/knights/knights_thumbnail.png" },
    description: "A puzzle platformer about a princess rescuing her worthless knight.",
    heroImage: { type: "youtube", videoId: "j649cO2KFxM" },
    lead: "A puzzle platformer where you play as a princess off to save her worthless knight.",
    links: [{ text: "Play", url: "https://dandadev.itch.io/the-knights-rescue", type: "outline" }],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This project was for my school's 72-hour game jam, and I made it essentially on my own. 72 hours is unforgiving. You play a princess who has to save her trapped knight, using an ability along with some minor puzzles.",
        ],
      },
      {
        title: "Technical Highlights",
        list: [
          "Advanced 2D character controller: coyote time, jump buffering and plenty of VFX. Combined with Celeste-like hair and a water dash, it feels very similar to playing Celeste.",
        ],
      },
    ],
    gallery: [
      { type: "image", src: "/src/assets/images/projects/knights/knights_01.png" },
      { type: "image", src: "/src/assets/images/projects/knights/knights_02.png" },
    ],
  },
  {
    slug: "the-last-shroom",
    date: "2024",
    status: "finished",
    category: "game-jams",
    title: "The Last Shroom",
    tags: ["Unity", "Roguelike"],
    thumbnail: { type: "image", src: "/src/assets/images/projects/shroom/shroom_thumbnail.png" },
    description: "Defend your castle from the spreading bramble as a little mushroom.",
    heroImage: { type: "youtube", videoId: "UmV87mrlvD0" },
    lead: "Play as a mushroom defending his castle from the bramble. Fight off monsters, push back the bramble and last as long as you can, or win outright.",
    links: [{ text: "Play", url: "https://dandadev.itch.io/thelastshroom", type: "outline" }],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This game was made in 2 weeks for the Pirate Software Game Jam with a team of three others: two artists and a composer. Our idea was a little mushroom guy defending his castle from a fast-spreading bramble. The bramble spawns enemies; killing them grants coins and seeds, and you plant the seeds to gain power-ups like extra health or damage.",
        ],
      },
      {
        title: "Team",
        list: [
          "Art: Nate5H & Spacetime Soirée",
          "Audio: BeezDiego"
        ]
      }
      // TODO: add Technical Highlights.
    ],
    
    gallery: [
      { type: "image", src: "/src/assets/images/projects/shroom/shroom_01.png" },
      { type: "image", src: "/src/assets/images/projects/shroom/shroom_02.png" },
    ],
  },
  {
    slug: "beneath-the-mountains",
    date: "2023",
    status: "finished",
    category: "game-jams",
    title: "Beneath the Mountains",
    tags: ["Unity", "Metroidvania", "3D", "First Person"],
    thumbnail: { type: "image", src: "/src/assets/images/projects/mountain/mountain_thumbnail.png" },
    description: "Explore a lost civilization, earn upgrades and escape.",
    heroImage: { type: "youtube", videoId: "jxJ_NwLF-WE" },
    lead: "Stumble across a lost civilization, explore the depths, take down enemies, earn upgrades and escape.",
    links: [{ text: "Play", url: "https://dandadev.itch.io/beneath-the-mountains", type: "outline" }],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "I made this game for Metroidvania Month 22, and it's the game I'm most proud of. It's inspired by King's Field, an old series by FromSoftware, and I hoped to recreate the feeling it gave me when I first played it.",
          "You play a miner who stumbles across a lost civilization. Make your way through the strange area, collect power-ups like the double jump and other items, and eventually escape.",
        ],
      },
      {
        title: "Technical Highlights",
        list: [
          "Upgrades: movement abilities and weapons, including double jump, dash, a bow and a sword. You start with a pickaxe that lets you climb certain walls, and chained together with the upgrades you find, it makes traversing the environment a lot of fun.",
          "Combat: straightforward. Swing your weapon while enemies move toward you and attack.",
          "NPCs: one NPC asks you to fetch the key to his cell so he can escape too. His main purpose is lore.",
        ],
      },
    ],
    gallery: [
      { type: "image", src: "/src/assets/images/projects/mountain/mountain_01.png" },
      { type: "image", src: "/src/assets/images/projects/mountain/mountain_02.png" },
      { type: "image", src: "/src/assets/images/projects/mountain/mountain_03.png" },
    ],
  },
  {
    slug: "gears-and-grit",
    date: "2023",
    status: "finished",
    category: "game-jams",
    title: "Gears and Grit",
    tags: ["Unreal Engine", "Puzzle", "Platformer", "3D"],
    thumbnail: { type: "image", src: "/src/assets/images/projects/gears/gears_thumbnail.png" },
    description: "A 3D puzzle platformer about a robot finding its way out.",
    heroImage: { type: "youtube", videoId: "llXZ5LmOvI4" },
    lead: "A 3D puzzle platformer where you play as a robot trying to find its way out.",
    links: [{ text: "Play", url: "https://dandadev.itch.io/gearsandgrit", type: "outline" }],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This game was part of the Epic Megajam 2023, a 7-day jam, and I made all of it myself. The idea was a 3D puzzle platformer where you play a robot finding its way out of a steampunk environment.",
          "The gameplay code was kept small (jumping, grabbing and picking up keys), so level and puzzle design carried the experience.",
        ],
      },
      {
        title: "Level Design",
        paragraphs: [
          "This game focused heavily on level design and puzzles. I iterated a lot to make the levels as fun as possible while keeping them difficult.",
          "The process was to block out the level first, then do an obstacle pass, and finally a pass with materials and decorations.",
        ],
      },
    ],
    gallery: [
      { type: "image", src: "/src/assets/images/projects/gears/gears_01.png" },
      { type: "image", src: "/src/assets/images/projects/gears/gears_02.png" },
      { type: "image", src: "/src/assets/images/projects/gears/gears_03.png" },
      { type: "image", src: "/src/assets/images/projects/gears/gears_04.png" },
    ],
  },
  {
    slug: "fallen-angel",
    date: "2023",
    status: "finished",
    category: "game-jams",
    title: "Fallen Angel",
    tags: ["Unity", "Arcade"],
    thumbnail: { type: "image", src: "/src/assets/images/projects/angel/angel_thumbnail.png" },
    description: "An arcade game about a fallen angel escaping endless purgatory.",
    heroImage: { type: "youtube", videoId: "aeSofGk9-4c" },
    lead: "An arcade game where you play as a fallen angel trying to escape an endless purgatory.",
    // Hosted on a collaborator's itch.io page (dairyproductt), not dandadev.
    links: [{ text: "Play", url: "https://dairyproductt.itch.io/fallen-angel", type: "outline" }],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This game was made for the 1-bit Jam over 1 week, with 4 others: another programmer, two artists, a producer and a sound designer. The idea was an endless arcade game where you play an angel with clipped wings who can only move inside objects. Dashing through enemies resets your dash, and the enemies get harder and harder.",
        ],
      },
      {
        title: "Technical Highlights",
        list: [
          "Endless levels: different level prefabs are chained one after another to create an endless scrolling level.",
          "Enemies: a variety of unique enemies, including some that shoot projectiles, some that shoot lasers and some that chase you. We didn't need pathfinding, so they were straightforward to create.",
          "Scoreboard: added to create some competition among players.",
        ],
      },
      {
        title: "Team",
        list: [
          "Programming: Me & DairyProductt",
          "Art: Me, Mantis & n3ista",
          "Music: Max Petrillo",
          "Sound: BoreDough"
        ]
      }
    ],
    gallery: [
      { type: "image", src: "/src/assets/images/projects/angel/angel_01.png" },
      { type: "image", src: "/src/assets/images/projects/angel/angel_02.png" },
    ],
  },
  {
    slug: "marv",
    date: "2023",
    status: "finished",
    category: "game-jams",
    title: "M.A.R.V.",
    tags: ["Unity", "Puzzle", "Platformer"],
    thumbnail: { type: "image", src: "/src/assets/images/projects/marv/marv_thumbnail.png" },
    description: "A short puzzle platformer with your personal robot, M.A.R.V.",
    heroImage: { type: "youtube", videoId: "XOAMiYziNnw" },
    lead: "Solve puzzles in this short puzzle platformer with the help of M.A.R.V., your personal robot.",
    links: [{ text: "Play", url: "https://dandadev.itch.io/marv", type: "outline" }],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This game was made solo in 1 week for Major Jam 6. The idea was a puzzle platformer where a robot helps you solve puzzles. It starts with one ability, turning into a cube, which is enough to solve the first level. Soon after, the robot unlocks 2 more abilities that help with the next few levels.",
        ],
      },
      // TODO: add Technical Highlights (how the abilities are structured).
    ],
    gallery: [
      { type: "image", src: "/src/assets/images/projects/marv/marv_01.png" },
      { type: "image", src: "/src/assets/images/projects/marv/marv_02.png" },
      { type: "image", src: "/src/assets/images/projects/marv/marv_03.png" },
    ],
  },
  {
    slug: "the-crybaby-knight",
    date: "2023",
    status: "finished",
    category: "game-jams",
    title: "The Crybaby Knight",
    tags: ["Unity", "Rage Game", "Platformer"],
    thumbnail: { type: "image", src: "/src/assets/images/projects/crybaby/crybaby_thumbnail.png" },
    description: "A Jump King-like where you launch a princess up to rescue her crybaby knight.",
    heroImage: { type: "youtube", videoId: "PUhvUBDpneg" },
    lead: "Play as a princess who has to save her crybaby knight. Launch yourself in this Jump King-like game and save the knight.",
    links: [{ text: "Play", url: "https://dandadev.itch.io/the-crybaby-knight", type: "outline" }],
    sections: [
      {
        title: "Overview",
        // TODO: double-check the GMTK 2023 jam length (I believe it was 48 hours).
        paragraphs: [
          "This game was made in 3 days for GMTK 2023, inspired mainly by Jump King. You play a princess who can launch herself upward only when she's on the floor, and you have to make your way to the top to save your crybaby knight. The twist is that you can place platforms beneath your feet, so you can build your own solutions to the level you're stuck on.",
        ],
      },
      // TODO: add Technical Highlights.
    ],
    gallery: [
      { type: "image", src: "/src/assets/images/projects/crybaby/crybaby_01.png" },
      { type: "image", src: "/src/assets/images/projects/crybaby/crybaby_02.png" },
    ],
  },
  {
    slug: "the-55th-expedition",
    date: "2023",
    status: "finished",
    category: "game-jams",
    title: "The 55th Expedition",
    tags: ["Unity", "Dungeon Crawler", "Turn-Based"],
    thumbnail: { type: "image", src: "/src/assets/images/projects/expedition/expedition_thumbnail.png" },
    description: "A turn-based dungeon crawler about finding rare items and escaping.",
    heroImage: { type: "youtube", videoId: "NrLEGZ7C-k8" },
    lead: "Explore the depths of this dungeon crawler, find rare items, upgrade your character and escape the dungeon.",
    links: [{ text: "Play", url: "https://dandadev.itch.io/the-55th-expedition", type: "outline" }],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This game was made for Dungeon Crawler Jam 2023. I worked on it solo, and as a huge fan of the fantasy genre, I had a lot of fun making it.",
        ],
      },
      {
        title: "Technical Highlights",
        list: [
          "Inventory system: a simple grid-based system where you drag and drop items into equipment slots, reorganize your inventory and use items.",
          "Turn-based combat: the main way to fight enemies, kept simple given how short the jam was. Your damage factors in your equipment, stats and level, and enemies attack based on their level.",
          "Dungeon generation: I originally wanted a random dungeon generator that still felt handcrafted. The result reads an image of a set size and places rooms based on pixel color, so I could create maps incredibly fast, although I only had time to design one level.",
        ],
      },
      {
        title: "Results",
        list: ["8th out of 185 for Most Fun"],
      },
    ],
    gallery: [
      { type: "image", src: "/src/assets/images/projects/expedition/expedition_01.png" },
      { type: "image", src: "/src/assets/images/projects/expedition/expedition_02.png" },
      { type: "image", src: "/src/assets/images/projects/expedition/expedition_03.png" },
    ],
  },
  {
    slug: "caravan-trader-2",
    date: "2026",
    status: "in-development",
    category: "personal-projects",
    title: "Caravan Trader (Full Version)",
    tags: ["Unity", "Trading-Sim", "RPG", "Story", "Base Building"],
    // TODO: use a distinct thumbnail from the jam version.
    thumbnail: { type: "image", src: "/src/assets/images/projects/caravan/caravan_thumbnail.png" },
    description: "A cozy trading sim about travel, characters and upgrading your caravan.",
    heroImage: { type: "video", src: "/src/assets/videos/caravan_2_gameplay.mp4" },
    lead: "A cozy trading-sim game where you can travel between towns, interact with unique characters, flip items for profit and upgrade your caravan.",
    // TODO: add a wishlist or devlog link.
    links: [

    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This is a game my team and I are currently working on. It's based on our original game jam idea, with far more interconnected systems and features.",
        ],
      },
      {
        title: "My Role",
        paragraphs: [
          "I'm responsible for the majority of the code. I designed and outlined how the major systems are built and connected. A game of this scope is a huge task, so my composer helps with some code and scripts locations and encounters.",
        ],
      },
      {
        title: "Technical Highlights",
        // TODO: add architecture decisions and specifics (the old "Lots more that I can't fit here" line said nothing).
        list: [
          "Building system: a detailed 2D system where you connect pieces together within a set area. The caravan has two layers, the front and the interior, and a door leads between them and allows extra objects to be placed.",
          "Dialogue system: we use Yarn Spinner to write and manage dialogue. It lets us define dialogue flow and trigger events easily.",
          "World traversal: traversal is seamless. Select a point on the map and you travel along a route to it. This was complex because we had to translate a 2D top-down view into a 2D side-scrolling view and keep it easy to understand.",
        ],
      },
      {
        title: "Building System",
        content: [
          {type: "media", images: [{type: "video", src: "/src/assets/videos/caravan_building_demo.mp4", label: "Building demo"}]},
          {type: "text", text: "This is THE most complex mechanic Ive ever worked on. Not only does it need to support a grid based building system, it needs to support layers, building types, sockets, connections, unique behaviour, player interaction and building restrictions.",},
          {type: "text", text: "I ended up designing the system using this architecture:",},
          {type: "media", images: [{type: "image", src: "/src/assets/images/projects/caravan/caravan_02_code.png", label: "Snippet of the building system architecture"}]},
          {type: "text", text: "The idea was this, the building instance is a pure c# class, it has a generic key/value data store that stores unique data per object, it can be moved around easily and serialized. Doing this allows the building prefab to stay seperated from the data and any behaviour modifies the value in the data store directly. This was needed to support the sheer amount of unique buildings we need that need to persist between scenes and be saved/loaded.",},

        ]
      },
      {
        title: "Quest System",
        content: [
          {type: "text", text: "The current questing system we have is pretty robust, quests arent specifically marked, but tracked in your inventory. We want a feeling of exploration and visually guiding the player all the time would just ruin the immersion.",},
          {type: "media", images: [{type: "image", src: "/src/assets/images/projects/caravan/caravan_02_06.png", label: "Current Quest Menu"}]},
          {type: "text", text: "This system allows the creation of quests through scriptable objects and allows easy extension to support new quest types. It was a simple design; use the global event bus to listen to certain quest flags being completed then process them based on the current progress.",},
          {type: "media", images: [{type: "image", src: "/src/assets/images/projects/caravan/caravan_02_code_02.png", label: "Snippet of the quest processing code."}]},
        ]
      },
      {
        title: "Team",
        list: [
          "Art: possumxking",
          "Composer/Sound: Joshua Wheeler"
        ],
      },
    ],
    gallery: [
      { type: "image", src: "/src/assets/images/projects/caravan/caravan_02_01.png" },
      { type: "image", src: "/src/assets/images/projects/caravan/caravan_02_02.png" },
      { type: "image", src: "/src/assets/images/projects/caravan/caravan_02_03.png" },
      { type: "image", src: "/src/assets/images/projects/caravan/caravan_02_04.png" },
      { type: "image", src: "/src/assets/images/projects/caravan/caravan_02_05.png" },
    ],
  },
  {
    slug: "lab-rats",
    date: "2024",
    status: "abandoned",
    category: "personal-projects",
    title: "Lab Rats",
    tags: ["Unreal Engine", "Unity", "Multiplayer", "Horror"],
    thumbnail: { type: "image", src: "/src/assets/images/projects/labrats/labrats_01.png" },
    description: "You and your friends are lab rats for a corrupt corperation, explore dimensions, find loot and make the most of your eternal sentence.",
    heroImage: { type: "youtube", videoId: "4jSZBeIbYfs" },
    lead: "You and your friends are lab rats for a corrupt corperation, explore dimensions, find loot and make the most of your eternal sentence.",
    links: [

    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This game was made to experiment with multiplayer systems. I first started the project in Unreal Engine, then transitioned to Unity as the main thing I wanted to get out of this project was an understanding of networking.",
          "The game concept was that you and youre friends are trapped working for a corrupt corperation, you live in a jail like enviornment and are sent out a dimensional portal to explore and collect items to reasearch. At the end of each day the portal closes and you have to make it back before then."
        ],
      },
      {
        title: "Inventory System",
        list: [
          "Each player has a few slots in their inventory, they can pick up, drop and use items. The purpose of this is for players to pick up items and bring it back to their home to sell.",
        ],
        imageLayout: "right",
        images: [
          {
            type: "image",
            src: "/src/assets/images/projects/labrats/labrats_item_demo.png",
            label:"Item pickup and UI example",
          },
        ]

      },
      {
        title: "Level Generator",
        content: [
          {type: "text", text: "By far the level generator for this game was one of the most complex mechanics Ive ever created. The system itself is structured in a way where the level generator takes in a scriptable object that implements an interface. This scriptable object contains all the generation config and code, it then runs the generator using a seed thats sent over the network to create a unique dungeon. This system had to be easily extendable because of the amount of levels I wanted to implement.",},
          {type: "media", images: [{type: "image", src: "/src/assets/images/projects/labrats/code_02.png", label: "Example of Level Scriptable Object"}]},
          {type: "text", text: "The main method of generation was done using an algorithm that followed these steps: place rooms -> create points for each room -> use Delaunay triangulate to connect rooms -> find the mst of all the points -> add some extra connections -> then create hallways between every room using the connections made."},
          {type: "media", images: [{type: "image", src: "/src/assets/images/projects/labrats/code_01.png", label: "Implementation of one layer"}]},
          {type: "text", text: "This method allowed for every room to be included and for generation to be unique enough that it dosent feel stale."}
        ],
        imageLayout: "center",
        images: [
          {
            type: "image",
            src: "/src/assets/images/projects/labrats/labrats_level_demo_01.png",
            label:"Sewers Level",
          },
        ]
      }
    ],
    gallery: [],
  },
  {
    slug: "sewage",
    date: "2021",
    status: "finished",
    category: "personal-projects",
    title: "Sewage",
    tags: ["Unreal Engine", "Horror", "3D"],
    thumbnail: { type: "image", src: "/src/assets/images/projects/sewage/sewage_thumbnail.png" },
    description: "A short horror game about escaping a sewer network.",
    heroImage: { type: "youtube", videoId: "ecSWRAPM2_U" },
    lead: "A short horror game about escaping a sewer network after finding out you're not alone.",
    links: [{ text: "Play", url: "https://dandadev.itch.io/sewage", type: "outline" }],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This was my first published indie game. I made it after years of playing around with Unreal Engine and finally decided to release something. Although it's clunky and unpolished, it's important to me because it kicked off my interest and passion for game development.",
        ],
      },
    ],
    gallery: [
      { type: "image", src: "/src/assets/images/projects/sewage/sewage_01.png" },
      { type: "image", src: "/src/assets/images/projects/sewage/sewage_02.png" },
      { type: "image", src: "/src/assets/images/projects/sewage/sewage_03.png" },
    ],
  },
];