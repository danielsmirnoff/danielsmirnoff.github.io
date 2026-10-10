import type { Project, CategoryInfo } from '../types';

export const categories: CategoryInfo[] = [
  { 
    slug: 'commercial-games', 
    title: 'Commercial Games', 
    description: 'Professional shipped titles, contract work, and published games built in collaboration with individuals or large teams.' 
  },
  { 
    slug: 'personal-projects', 
    title: 'Personal Projects', 
    description: 'Technical experiments, and passionate side-projects built to learn and explore new mechanics or systems.' 
  },
  { 
    slug: 'game-jams', 
    title: 'Game Jams', 
    description: 'Rapid prototyping under tight deadlines. Focused on scoping, quick iteration, and delivering a playable experience anywhere between 3 days to 2 weeks' 
  },
  // { 
  //   slug: 'other', 
  //   title: 'Other', 
  //   description: "Other random projects I've worked on for fun"
  // }
];

export const projects: Project[] = [
  {
    slug: "you-suck-at-football",
    date: "2025",
    status: "finished",
    category: "commercial-games",
    title: "You Suck at Football",
    tags: ["Unreal Engine", "Multiplayer", "3D"],
    thumbnail: { type: 'image', src:"/src/assets/images/projects/football/football_thumbnail.jpeg"},
    description: "",
    heroImage: { type: 'youtube', videoId:"Hj4940py_9Q"},
    lead: "A coop rage game where you have to bring a football up a winding dangerous path.",
    links: [
      { text: "Steam", url: "https://store.steampowered.com/app/3842740/You_Suck_At_Football/", type: "outline" },
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "I was invited to work on this game as a level designer by a youtuber GorkaGames after he saw my work on a gamejam. I was provided a few obstacles and a task to design the level from scratch.",
          "I first started the blockout for the level using a custom path generator I created. I was surpised when I saw that game was released without any or much polish and with the blockout level.",
        ]
      },
      {
        title: "Technical Highlights",
        list: [
          "Custom level tooling to create paths",
          "Custom PCG system to place grass on paths"
        ]
      },
      {
        title: "My Role",
        list: [
          "I worked specifically on level design and layout. I created level design tools to easily create the blockout for the first level. I also helped with some additional bug fixes when it came to the obstacles.",
        ]
      },
      {
        title: "Results",
        list: [
          "1,000+ downloads on Steam",
        ]
      }
    ],
    gallery: [
      { type: 'image', src:"/src/assets/images/projects/football/football_01.jpg"},
      { type: 'image', src:"/src/assets/images/projects/football/football_02.jpg"},
      { type: 'image', src:"/src/assets/images/projects/football/football_03.jpg"}
    ]
  },
  {
    slug: "beybleed-arena",
    date: "2026",
    status: "finished",
    category: "game-jams",
    title: "Beybleed Arena",
    tags: ["Unity", "Rougelike", "Beyblade"],
    thumbnail: { type: 'image', src:"/src/assets/images/projects/beybleed/beybleed_thumbnail.png"},
    description: "A beyblade-like rougelike where you rip and spin through enemies, upgrade your blade and survive all 9 rounds.",
    heroImage: { type: 'youtube', videoId:"IARKQ_5atz4"},
    lead: "A beyblade-like rougelike where you rip and spin through enemies, upgrade your blade and survive all 9 rounds.",
    links: [
      { text: "Play", url: "https://dandadev.itch.io/beybleedarena", type: "outline" },
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: ["This project was build in 7 days for the Very Serious Game Jam, I worked with a very talented team and was the sole programmer with some additional help from our composer."]
      },
      {
        title: "Technical Highlights",
        list: [
               "Dependency Injection using the init args package",
               "Efficient use of design patterns to optimize code structure.",
               "Features Ryan Gosling"
              ]
      },
      {
        title: "Team",
        list: ["Art: possumxking, Kismet.psd", "Sound Design: Hovig Sarkissian", "Composer: Joshua Wheeler"]
      }
    ],
    gallery: [
      { type: 'image', src:"/src/assets/images/projects/beybleed/beybleed_01.png"},
      { type: 'image', src:"/src/assets/images/projects/beybleed/beybleed_02.png"},

    ]
  },
  {
    slug: "caravan-trader",
    date: "2026",
    status: "finished",
    category: "game-jams",
    title: "Caravan Trader (Jam Ver)",
    tags: ["Unity", "Trading-Sim"],
    thumbnail: { type: 'image', src:"/src/assets/images/projects/caravan/caravan_thumbnail.png"},
    description: "A cozy trading-sim game where you can travel between towns, flip items for profit, upgrade your caravan and fight off enemies.",
    heroImage: { type: 'youtube', videoId:"Z6-VXz9MkvE"},
    lead: "A cozy trading-sim game where you can travel between towns, flip items for profit, upgrade your caravan and fight off enemies.",
    links: [
      { text: "Play", url: "https://dandadev.itch.io/traderscaravan", type: "outline" },
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This game was made in 7 days for the Brackeys 2026.1 game jam. The theme was Strange Lands and we came up with the idea of a trader traveling strange lands, flipping items for profit and fighting off enemies.",
          "We ended up ranking 20th out of 1,400 entries. We even ended up working on the project after the game jam to add some extra polish.",
        ]
      },
      {
        title: "Post-Jam",
        paragraphs: [
          "After the jam we came together and realized the concept we have has some potential. We started working on a version of the game with a much larger scope. One with more complex and detailed systems.",
          "Check out my personal project page to see the post jam progress."
        ]
      },
      {
        title: "Team",
        list: ["Art: possumxking", "Composer: Joshua Wheeler"]
      }
    ],
    
    gallery: [
        { type: 'image', src:"/src/assets/images/projects/caravan/caravan_01.png"},
        { type: 'image', src:"/src/assets/images/projects/caravan/caravan_02.png"},
        { type: 'image', src:"/src/assets/images/projects/caravan/caravan_03.png"},
        { type: 'image', src:"/src/assets/images/projects/caravan/caravan_04.png"},

    ]
  },
  {
    slug: "puppet-masker",
    date: "2026",
    status: "finished",
    category: "game-jams",
    title: "Puppet Masker",
    tags: ["Unity", "Rougelike", "Top-Down", "Survivors-Like"],
    thumbnail: { type: 'image', src:"/src/assets/images/projects/puppet/puppet_thumbnail.png"},
    description: "A rougelike game where you battle enemies, collect masks and grow your army of puppets.",
    heroImage: { type: 'youtube', videoId:"arS1eUidJB0"},
    lead: "A rougelike game where you battle enemies, collect masks and grow your army of puppets.",
    links: [
      { text: "Play", url: "https://dandadev.itch.io/puppetmasker", type: "outline" },
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This game was made in 3 days for the San Jose State University game dev club game jam. The idea for this game was that you run around battling these puppets that attack you, and collect shards from them. Collecting enough shards allows you to roll for a mask, finally throwing a mask at an enemy makes them fight for you with a unique mask ability.",
          "I worked on this game with a team of 3 others. A 2 artists and a programmer, I was the lead programmer with additional help from the other programmer. Its also funny because I didnt even attend this school, my mutual friend who was the club president invited me so I just joined for fun."
        ]
      },
      {
        title: "Technical Highlights",
        list: ["Object pooling bullet manager", "Strategy pattern for different abilities"]
      },
      {
        title: "Team",
        list: ["Art: end3rguy", "Enviornment & UI Art: Cakedust", "Programming: Garogorl"]
      }
    ],
    gallery: [
      { type: 'image', src:"/src/assets/images/projects/puppet/puppet_01.png"},
      { type: 'image', src:"/src/assets/images/projects/puppet/puppet_02.png"},
      { type: 'image', src:"/src/assets/images/projects/puppet/puppet_03.png"},
      { type: 'image', src:"/src/assets/images/projects/puppet/puppet_04.png"},

    ]
  },
  {
    slug: "excarnate",
    date: "2025",
    status: "finished",
    category: "game-jams",
    title: "Excarnate",
    tags: ["Unity", "Rougelike", "Card Battler"],
    thumbnail: { type: 'image', src:"/src/assets/images/projects/excarnate/excarnate_thumbnail.png"},
    description: "A rouge-like card battler, traverse a dark dungeon collecting cards, battling enemies and growing your army.",
    heroImage: { type: 'youtube', videoId:"Q4ucQP57asA"},
    lead: "A rouge-like card battler, traverse a dark dungeon collecting cards, battling enemies and growing your army.",
    links: [
      { text: "Play", url: "https://dandadev.itch.io/excarnate", type: "outline" },
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This game was made in 3 days for the Jamsepticeye game jam. I feel like we overscoped a bit for a 3 day jam. Overall it was very fun to make, we all loved card games so the product came out pretty fun.",
          "We even worked on the game after the jam with hopes of turning it into a full steam release. We abandoned the it as the scope grew out of hand."
        ]
      },
      {
        title: "Team",
        list: ["Art: pixelmage", "Audio: Joshua Wheeler"]
      }
    ],
    gallery: [
      { type: 'image', src:"/src/assets/images/projects/excarnate/excarnate_01.png"},
      { type: 'image', src:"/src/assets/images/projects/excarnate/excarnate_02.png"},
      { type: 'image', src:"/src/assets/images/projects/excarnate/excarnate_03.png"},
    ]
  },
  {
    slug: "underground-hog-day",
    date: "2025",
    status: "finished",
    category: "game-jams",
    title: "Underground-hog day",
    tags: ["Godot", "Roguelike", "2D", "Incremental"],
    thumbnail: { type: 'image', src:"/src/assets/images/projects/hog/hog_thumbnail.png"},
    description: "A incremental rougelike mining game where you play as a ground hog stuck in a time loop.",
    heroImage: { type: 'youtube', videoId:"i8PuMY027KM"},
    lead: "A incremental rougelike mining game where you play as a ground hog stuck in a time loop.",
    links: [
      { text: "Play", url: "https://dandadev.itch.io/underground-hog-day", type: "outline" },
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This game was incredibly fun to work on and the result ended up being a really fun concept. The idea is that youre a ground hog stuck in a ground-hog day time loop. Basically the same day repeats over and over again. Your goal is to mine as much as you can before the day restarts, sell the items to upgrade yourself so you can eventually make it to the exit.",
          "This game was made in 3 days for GMTK 2025, we had an artist and a composer. Both were my friends who never participated in a game jam before, and we ended up placing 25th for enjoyment out of 9,000 entries!"
        ]
      },
      {
        title: "Features",
        list: [
          "Level Generation: I made a custom level generator that created the entire underground. It would place random chunks of ore using perlin noise along with a step function to place common ores next to spawn while rarer ones far from spawn.",
          "Upgrade system: Which used a Strategy pattern to seamlessly add new extendable abilities."
        ]
      }
    ],
    gallery: 
    [
      { type: 'image', src:"/src/assets/images/projects/hog/hog_01.png"},
      { type: 'image', src:"/src/assets/images/projects/hog/hog_02.png"},
    ]
  },
  {
    slug: "soul-below",
    date: "2024",
    status: "finished",
    category: "game-jams",
    title: "Soul Below",
    tags: ["Unity", "Roguelike", "2D", "Bullet Hell"],
    thumbnail: { type: 'image', src:"/src/assets/images/projects/soul/soul_thumbnail.png"},
    description: "A rougelike game where you play as the reaper collecting lost souls. Upgrade your gun, defeat enemies and escape purgatory.",
    heroImage: { type: 'youtube', videoId:"jLaW8sDsm9Q"},
    lead: "A rougelike game where you play as the reaper collecting lost souls. Upgrade your gun, defeat enemies and escape purgatory.",
    links: [
      { text: "Play", url: "https://dandadev.itch.io/soul-below", type: "outline" },
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This game was made in 1 week for a game jam at my schools game dev club. I worked with a team of 2 others, an artist and a composer. This project turned out to be really fun to make and to play, a lot of people enjoyed it and even asked for it to be made into a full game.",
          "We also ended up winning the game jam."
        ]
      }
    ],
    gallery: [
      { type: 'image', src:"/src/assets/images/projects/soul/soul_01.png"},
    ]
  },
  {
    slug: "mcbooms-kaboom",
    date: "2024",
    status: "finished",
    category: "game-jams",
    title: "McBooms Kaboom",
    tags: ["Unity", "Puzzle", "2D", "Platformer"],
    thumbnail: { type: 'image', src:"/src/assets/images/projects/booms/booms_thumbnail.png"},
    description: "A time-based puzzle platformer, escape the clocktower before it blows up with a unique time bending ability.",
    heroImage: { type: 'youtube', videoId:"bi9BAZdA6dQ"},
    lead: "A time-based puzzle platformer, escape the clocktower before it blows up with a unique time bending ability.",
    links: [
      { text: "Play", url: "https://dandadev.itch.io/mcbooms-kaboom", type: "outline" },
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This game was made in a week at my schools game dev club game jam, I worked with a team of 3 others, 1 programmer, 1 artist / writer and 1 composer. This game was very fun to develop as it was my first ever in person game jam.",
          "We also ended up winning 1st for this jam!"
        ]
      },
      {
        title:"Mechanics",
        list: [
          "A time reversal mechanic that tracks every defined object that is affected by time and can replay its actions when time is going backwards.",
          "Physics based obstacles: pistons that move and retract, gears that rotate, buttons, 2D physics objects, moveable platforms."
        ]
      },
    ],
    gallery: [
      { type: 'image', src:"/src/assets/images/projects/booms/booms_01.png"},
      { type: 'image', src:"/src/assets/images/projects/booms/booms_02.png"},
    ]
  },
  {
    slug: "merge-defense",
    date: "2024",
    status: "finished",
    category: "game-jams",
    title: "Merge Defense",
    tags: ["Unity", "Tower Defense", "2D", "Pixel-art"],
    thumbnail: { type: 'image', src:"/src/assets/images/projects/merge/merge_thumbnail.png"},
    description: "A tower defense game where you can merge towers to upgrade them.",
    heroImage: { type: 'image', src:"/src/assets/images/projects/merge/merge_thumbnail.png"},
    lead: "A tower defense game where you can merge towers to upgrade them.",
    links: [
      { text: "Play", url: "https://dandadev.itch.io/merge-defense", type: "outline" },
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This game was a submission by me alone for the GMTK 2024 game jam. I distinctly remember wanting to experiment with tower defense genre, so I mixed a fantasy dungeon aesthetic with sci-fi? It wasnt the most fun game but it was very fun to work on.",
    
        ]
      },
      {
        title: "Mechanics",
        list: [
          "A round based enemy spawning system made with scriptable objects for easy iteration.",
          "A ability system for the towers made with strategy pattern for extendability."
        ]
      }
    ],
    gallery: [
      { type: 'image', src:"/src/assets/images/projects/merge/merge_01.png"},
      { type: 'image', src:"/src/assets/images/projects/merge/merge_02.png"},
      { type: 'image', src:"/src/assets/images/projects/merge/merge_03.png"},
    ]
  },
  {
    slug: "the-knights-rescue",
    date: "2024",
    status: "finished",
    category: "game-jams",
    title: "The Knights Rescue",
    tags: ["Unity", "Roguelike", "2D"],
    thumbnail: { type: 'image', src:"/src/assets/images/projects/knights/knights_thumbnail.png"},
    description: "A puzzle platformer where you play as a princess off to save her worthless knight",
    heroImage: { type: 'image', src:"/src/assets/images/projects/knights/knights_thumbnail.png"},
    lead: "A puzzle platformer where you play as a princess off to save her worthless knight",
    links: [
      { text: "Play", url: "https://dandadev.itch.io/the-knights-rescue", type: "outline" },
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This project was for my schools 72 hour game jam, I essentially did this on my own and 72 hours is very unforgiving for a game jam. I ended up making game about a princess who has to save her knight whos trapped and you have to use an ability along with some minor puzzles.",
        
        ]
      },
      {
        title: "Mechanics",
        list: [
          "An advanced character controller: I ended up making a pretty advanced 2d character controller with features like coyote time, jump buffering, and lots of vfx. That combined with the Celeste like hair and water dash gave it a very similar feeling to playing Celeste",
        ]
      }
    ],
    gallery: [
      { type: 'image', src:"/src/assets/images/projects/knights/knights_01.png"},
      { type: 'image', src:"/src/assets/images/projects/knights/knights_02.png"},
    ]
  },
  {
    slug: "the-last-shroom",
    date: "2024",
    status: "finished",
    category: "game-jams",
    title: "The Last Shroom",
    tags: ["Unity", "Roguelike"],
    thumbnail: { type: 'image', src:"/src/assets/images/projects/shroom/shroom_thumbnail.png"},
    description: "Play as a mushroom defending his castle from the weeds. Fight off monsters and push back the weeds while you try to last as long as possible, or win against the weeds.",
    heroImage: { type: 'image', src:"/src/assets/images/projects/shroom/shroom_thumbnail.png"},
    lead: "Play as a mushroom defending his castle from the weeds. Fight off monsters and push back the weeds while you try to last as long as possible, or win against the weeds.",
    links: [
      { text: "Play", url: "https://dandadev.itch.io/thelastshroom", type: "outline" },
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This game was made in 2 weeks for the Pirate Software Game Jam. I worked with a team of 3 others, 2 artists, and 1 composer. Out idea was to make a game about a little mushroom guy defending his kingdom from a fast spreading bramble. This bramble spawns enemies, killing the enemies grants you coins and seeds, with those you can plant seeds that give you different powerups like health or damage.",
        ]
      }
    ],
    gallery: [
      { type: 'image', src:"/src/assets/images/projects/shroom/shroom_01.png"},
      { type: 'image', src:"/src/assets/images/projects/shroom/shroom_02.png"},
    ]
  },
  {
    slug: "beneath-the-mountains",
    date: "2023",
    status: "finished",
    category: "game-jams",
    title: "Beneath the Mountains",
    tags: ["Unity", "Metroidvania", "3D", "First Person"],
    thumbnail: { type: 'image', src:"/src/assets/images/projects/mountain/mountain_thumbnail.png"},
    description: "Stumble across a lost civilization, explore the depths, take down enemies, earn upgrades and escape.",
    heroImage: { type: 'youtube', videoId:"jxJ_NwLF-WE"},
    lead: "Stumble across a lost civilization, explore the depths, take down enemies, earn upgrades and escape.",
    links: [
      { text: "Play", url: "https://dandadev.itch.io/beneath-the-mountains", type: "outline" },
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "I made this game for Metroidvania Month 22, honestly this is the game Im most proud of. The inspiration for this game is an old series called Kingsfield made by FromSoftware, it was a game I was inspired by and hoped to recreate that feeling it gave me when I first played it.",
          "The idea is that youre a miner who stumbled across a lost civilization, you have to make your way through this strange area, collect power ups, like double jump and certain items and eventually escape."
        ]
      },
      {
        title: "Mechanics",
        list: [
          "Upgrades: upgrades came in a form of movement abilities or weapons. I had double jump, dash, a bow and a sword. You start the game off with a pickaxe that you can use to climb certain walls, chain that together with upgrades you find and it becomes very fun to traverse the environment.",
          "Combat: Combat was very straightforward in this game, swing your weapon and the enemies will move towards you and attack.",
          "Npcs: I had one Npc in this game, he asks you simply to fetch a key to his cell so he can also escape. His main purpose was basically just for lore."
        ]
      }
    ],
    gallery: [
      { type: 'image', src:"/src/assets/images/projects/mountain/mountain_01.png"},
      { type: 'image', src:"/src/assets/images/projects/mountain/mountain_02.png"},
      { type: 'image', src:"/src/assets/images/projects/mountain/mountain_03.png"},
    ]
  },
  {
    slug: "gears-and-grit",
    date: "2023",
    status: "finished",
    category: "game-jams",
    title: "Gears and Grit",
    tags: ["Unity", "Roguelike", "2D"],
    thumbnail: { type: 'image', src:"/src/assets/images/projects/gears/gears_thumbnail.png"},
    description: "A cozy trading-sim game where you can travel between towns, flip items for profit, upgrade your caravan and fight off enemies.",
    heroImage: { type: 'youtube', videoId:"llXZ5LmOvI4"},
    lead: "A cozy farming simulator focused on relaxation and deeply interconnected seasonal systems.",
    links: [],
    sections: [
      {
        title: "Overview",
        paragraphs: ["My first deep dive into Godot."]
      }
    ],
    gallery: [
      { type: 'image', src:"/src/assets/images/projects/gears/gears_01.png"},
      { type: 'image', src:"/src/assets/images/projects/gears/gears_02.png"},
      { type: 'image', src:"/src/assets/images/projects/gears/gears_03.png"},
      { type: 'image', src:"/src/assets/images/projects/gears/gears_04.png"},
    ]
  },
  {
    slug: "fallen-angel",
    date: "2023",
    status: "finished",
    category: "game-jams",
    title: "Fallen Angel",
    tags: ["Unity", "Roguelike", "2D"],
    thumbnail: { type: 'image', src:"/src/assets/images/projects/angel/angel_thumbnail.png"},
    description: "A cozy trading-sim game where you can travel between towns, flip items for profit, upgrade your caravan and fight off enemies.",
    heroImage: { type: 'image', src:"/src/assets/images/projects/angel/angel_thumbnail.png"},
    lead: "A cozy farming simulator focused on relaxation and deeply interconnected seasonal systems.",
    links: [],
    sections: [
      {
        title: "Overview",
        paragraphs: ["My first deep dive into Godot."]
      }
    ],
    gallery: [
      { type: 'image', src:"/src/assets/images/projects/angel/angel_01.png"},
      { type: 'image', src:"/src/assets/images/projects/angel/angel_02.png"},
    ]
  },
  {
    slug: "marv",
    date: "2023",
    status: "finished",
    category: "game-jams",
    title: "M.A.R.V",
    tags: ["Unity", "Roguelike", "2D"],
    thumbnail: { type: 'image', src:"/src/assets/images/projects/marv/marv_thumbnail.png"},
    description: "A cozy trading-sim game where you can travel between towns, flip items for profit, upgrade your caravan and fight off enemies.",
    heroImage: { type: 'image', src:"/src/assets/images/projects/marv/marv_thumbnail.png"},
    lead: "A cozy farming simulator focused on relaxation and deeply interconnected seasonal systems.",
    links: [],
    sections: [
      {
        title: "Overview",
        paragraphs: ["My first deep dive into Godot."]
      }
    ],
    gallery: [
      { type: 'image', src:"/src/assets/images/projects/marv/marv_01.png"},
      { type: 'image', src:"/src/assets/images/projects/marv/marv_02.png"},
      { type: 'image', src:"/src/assets/images/projects/marv/marv_03.png"},
    ]
  },
  {
    slug: "the-crybaby-knight",
    date: "2023",
    status: "finished",
    category: "game-jams",
    title: "The Crybaby Knight",
    tags: ["Unity", "Roguelike", "2D"],
    thumbnail: { type: 'image', src:"/src/assets/images/projects/crybaby/crybaby_thumbnail.png"},
    description: "A cozy trading-sim game where you can travel between towns, flip items for profit, upgrade your caravan and fight off enemies.",
    heroImage: { type: 'image', src:"/src/assets/images/projects/crybaby/crybaby_thumbnail.png"},
    lead: "A cozy farming simulator focused on relaxation and deeply interconnected seasonal systems.",
    links: [],
    sections: [
      {
        title: "Overview",
        paragraphs: ["My first deep dive into Godot."]
      }
    ],
    gallery: [
      { type: 'image', src:"/src/assets/images/projects/crybaby/crybaby_01.png"},
      { type: 'image', src:"/src/assets/images/projects/crybaby/crybaby_02.png"},
    ]
  },
  {
    slug: "the-55th-expedition",
    date: "2023",
    status: "finished",
    category: "game-jams",
    title: "The 55th Expedition",
    tags: ["Unity", "Roguelike", "2D"],
    thumbnail: { type: 'image', src:"/src/assets/images/projects/expedition/expedition_thumbnail.png"},
    description: "A cozy trading-sim game where you can travel between towns, flip items for profit, upgrade your caravan and fight off enemies.",
    heroImage: { type: 'youtube', videoId:"NrLEGZ7C-k8"},
    lead: "A cozy farming simulator focused on relaxation and deeply interconnected seasonal systems.",
    links: [],
    sections: [
      {
        title: "Overview",
        paragraphs: ["My first deep dive into Godot."]
      }
    ],
    gallery: [
      { type: 'image', src:"/src/assets/images/projects/expedition/expedition_01.png"},
      { type: 'image', src:"/src/assets/images/projects/expedition/expedition_02.png"},
      { type: 'image', src:"/src/assets/images/projects/expedition/expedition_03.png"},
    ]
  },
  {
    slug: "sewage", 
    date: "2021",
    status: "finished",
    category: "game-jams",
    title: "Sewage",
    tags: ["Unity", "Roguelike", "2D"],
    thumbnail: { type: 'image', src:"/src/assets/images/projects/sewage/sewage_thumbnail.png"},
    description: "A cozy trading-sim game where you can travel between towns, flip items for profit, upgrade your caravan and fight off enemies.",
    heroImage: { type: 'image', src:"/src/assets/images/projects/sewage/sewage_thumbnail.png"},
    lead: "A cozy farming simulator focused on relaxation and deeply interconnected seasonal systems.",
    links: [],
    sections: [
      {
        title: "Overview",
        paragraphs: ["My first deep dive into Godot."]
      }
    ],
    gallery: [
      { type: 'image', src:"/src/assets/images/projects/sewage/sewage_01.png"},
      { type: 'image', src:"/src/assets/images/projects/sewage/sewage_02.png"},
      { type: 'image', src:"/src/assets/images/projects/sewage/sewage_03.png"},
    ]
  },
  {
    slug: "caravan-trader-2", 
    date: "2026",
    status: "In-Development",
    category: "personal-projects",
    title: "Caravan Trader",
    tags: ["Unity", "Trading-sim", "RPG", "Story", "Base Building"],
    thumbnail: { type: 'image', src:"/src/assets/images/projects/caravan/caravan_thumbnail.png"},
    description: "A cozy trading-sim game where you can travel between towns, interact with unique characters, flip items for profit and upgrade your caravan.",
    heroImage: { type: 'youtube', videoId:"GB7M9-MqZGk"},
    lead: "A cozy trading-sim game where you can travel between towns, interact with unique characters, flip items for profit and upgrade your caravan.",
    links: [

    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This game is something me and my team are currently working on. Its based off our orignal game jam idea, but with a lot more interconnected systems and features.",
        ]
      },
      {
        title: "My Role",
        paragraphs: [
          "I am responsible for the majority of the code written. I basically designed and outlines how multiple systems should be created and connected. Although a game of this scope is a huge task, I do have some help from my composer who helps with writing some code and scripting locations and encounters."
        ]
      },
      {
        title: "Mechanics",
        list: [
          "Building System: One of the key mechanics with this version of the game is an incredibly advanced and detailed building system. Its a 2D building system where you can connect pieces together in a set area. There is also 2 layers to the caravan, the front and the interior, a door can lead you between the layers and allows placement of extra objects.",
          "Dialogue System: For the dialogue we are using YarnSpinner to help us manage and write dialogue, its a useful tool where we can define dialogue flow and implement events easily.",
          "World Traversal: We expanded upon traversal by making it seamless, you can now select a point on the map and you will along a route to that point. It was complex to figure out because we had to translate a 2D top down view to a 2D sidescroller view and make easy to understand.",
          "Lots more that I cant fit here"
        ]
      },
      {
        title: "Team",
        paragraphs: [
          "Artist: possumxking",
          "Composer/Sound: Joshua Wheeler",
        ]
      },
    ],
    gallery: [
      { type: 'image', src:"/src/assets/images/projects/caravan/caravan_02_01.png"},
      { type: 'image', src:"/src/assets/images/projects/caravan/caravan_02_02.png"},
      { type: 'image', src:"/src/assets/images/projects/caravan/caravan_02_03.png"},
      { type: 'image', src:"/src/assets/images/projects/caravan/caravan_02_04.png"},
    ]
  },
  {
    slug: "lab-rats", 
    date: "2024",
    status: "abandoned",
    category: "personal-projects",
    title: "Lab Rats",
    tags: ["Unity", "Roguelike", "2D"],
    thumbnail: { type: 'image', src:"/src/assets/images/projects/labrats/labrats_01.png"},
    description: "A cozy trading-sim game where you can travel between towns, flip items for profit, upgrade your caravan and fight off enemies.",
    heroImage: { type: 'youtube', videoId:"4jSZBeIbYfs"},
    lead: "A cozy farming simulator focused on relaxation and deeply interconnected seasonal systems.",
    links: [],
    sections: [
      {
        title: "Overview",
        paragraphs: ["My first deep dive into Godot."]
      }
    ],
    gallery: []
  },
];