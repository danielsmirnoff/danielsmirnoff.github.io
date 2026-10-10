import MediaThumbnail from './media-thumbnail'
import type {Thumbnail} from '../types'
import { asset } from '../utils/asset';


//zQSCR8ZoHuc
const heroMedia: Thumbnail = { type: 'video', src: asset("assets/videos/trailer_gameplay.mp4") }

export default function Hero() {
  return (
    <header id="about" className="relative overflow-hidden bg-cover scroll-mt-32 px-6 py-56">
      {/* Video layer */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <MediaThumbnail
          media={heroMedia}
          title="Background"
          autoPlay
          wrapperClassName="absolute inset-0 overflow-hidden"
          mediaClassName="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-full min-w-[177.78vh]
                          -translate-x-1/2 -translate-y-1/2 object-cover"
        />
      </div>

      {/* Tint */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative max-w-6xl mx-auto flex flex-col-reverse items-center gap-10 rounded-2xl
                      bg-[#14213d] p-8 shadow-lg md:flex-row md:p-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          {/* <p className="font-mono text-sm uppercase tracking-widest text-[#fca311]">
            About Me
          </p> */}
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">
            Hi, I'm Daniel.
          </h1>
          <div className="mt-3 mx-auto h-1 w-16 rounded bg-[#fca311] md:mx-0" />

          <p className="mt-6 text-base leading-relaxed text-gray-200 md:text-lg">
            I'm a game developer with a passion for creating engaging and innovative
            gaming experiences. With expertise in Unity, Godot, and Unreal Engine, I specialize
            in gameplay programming and implementing complex game mechanics and I'm comfortable taking on any part of
            the development pipeline.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1AbYMDXi9CWz3XRJSYbN4eWivpMFqRPMj/view?usp=sharing"
              className="rounded-lg border border-[#fca311] px-5 py-2.5 text-sm font-semibold
                         text-[#fca311] transition hover:bg-[#fca311]/10"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Photo */}
        <img
          src={asset("assets/images/face.jpeg")}
          alt="Daniel Smirnoff"
          className="h-48 w-48 shrink-0 rounded-full border-4 border-[#fca311] object-cover
                     shadow-xl md:h-64 md:w-64"
        />
      </div>

    </header>

  )
}