import { useState, useRef, useEffect } from 'react';
import type { Thumbnail } from '../types';

interface Props {
  media: Thumbnail;
  title: string;
  wrapperClassName?: string;
  mediaClassName?: string;
  autoPlay?: boolean;
}

const FILL = 'absolute inset-0 h-full w-full';

export default function MediaThumbnail({
  media,
  title,
  wrapperClassName,
  mediaClassName,
  autoPlay = false,
}: Props) {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!autoPlay && media.type === 'video' && videoRef.current) {
      if (isHovering) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovering, media.type, autoPlay]);

  const youtubeParams =
    media.type === 'youtube'
      ? new URLSearchParams({
          autoplay: '1',
          mute: '1',
          loop: '1',
          playlist: media.videoId, // required for loop to work
          controls: '0',
          playsinline: '1',
          modestbranding: '1',
          rel: '0',
          disablekb: '1',
          iv_load_policy: '3',
        }).toString()
      : '';

  return (
    <div
      className={wrapperClassName || 'relative h-full w-full overflow-hidden'}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {media.type === 'image' && (
        <img
          src={media.src}
          alt={`${title} screenshot`}
          className={mediaClassName || `${FILL} object-cover`}
        />
      )}

      {media.type === 'video' && (
        <video
          ref={videoRef}
          src={media.src}
          muted
          loop
          playsInline
          autoPlay={autoPlay}
          className={mediaClassName || `${FILL} object-cover`}
        />
      )}

      {media.type === 'youtube' && (
        <>
          {!autoPlay && !isHovering && (
            <img
              src={`https://img.youtube.com/vi/${media.videoId}/hqdefault.jpg`}
              alt={`${title} youtube thumbnail`}
              className={mediaClassName || `${FILL} object-cover`}
            />
          )}
          {(autoPlay || isHovering) && (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${media.videoId}?${youtubeParams}`}
              title={`${title} trailer`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className={`${mediaClassName || FILL} pointer-events-none border-0`
              }
            />
          )}
        </>
      )}
    </div>
  );
}