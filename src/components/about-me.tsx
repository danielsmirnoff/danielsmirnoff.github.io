 
export default function AboutMe() {
  return (
    <div id="about" className="scroll-mt-32 px-6 py-16">

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <p className="font-mono text-sm uppercase tracking-widest text-[#fca311]">Who I Am</p>
          <h2 className="mt-2 text-3xl font-bold text-white">About Me</h2>
          <div className="mt-3 h-1 w-16 rounded bg-[#fca311]" />
        </div>
      
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-[#14213d] p-6 shadow-lg">
            <h1 className="text-2xl font-bold text-white">My Journey</h1>
            <p className="mt-2 text-gray-200">
              Game development is my passion. What started it all for me was playing around with visual scripting in Unreal Engine 4 when I was 13,
              since then I knew this is what I want to do. 10 years later here I am still passionate and still wanting to learn more.
              <br/><br/>
              Since starting in Unreal Engine 4, I moved over to Unity which I use as my main engine and have even tried Godot and other frameworks. Ive been enjoying my journey learning C# and all it has to offer but I still feel like I want to learn more!
            </p>
          </div>

          <div className="rounded-xl bg-[#14213d] p-6 shadow-lg">
            <h1 className="text-2xl font-bold text-white">A Gamer at Heart</h1>
            <p className="mt-2 text-gray-200">
              I believe that people should consume products in the industry they work in. It shows passion and proof that what you make is up to standard. I'm a huge gamer
              some of my favorite games include: Dark Souls 3, Celeste, Rimworld, Factorio, SOMA and Minecraft. <br/><br/>Although my all time favorite game has to be Dark Souls 3
              it has some of the best level design ive ever seen, that combined with an amazing soundtrack and a perfect combat system is the reason why its one of my favorites.
            </p>
          </div>

          <div className="rounded-xl bg-[#14213d] p-6 shadow-lg">
            <h1 className="text-2xl font-bold text-white">Other Hobbies</h1>
            <p className="mt-2 text-gray-200">
              Outside of game development, I'm love Rock Climbing, Volleyball and learning new things. Right now Im trying to learn guitar and 3D modeling. <br/><br/>I also have a game dev alias I go by called DandaDev, I try to post fun videos, tutorials and other random game dev related things on there.
            </p>
          </div>
        </div>
      </div>

    </div>

  )
}