"use client";

import type { Song } from "@/types/region";
import AudioPlayer from "@/components/audio/AudioPlayer";

type SongCardProps = {
  song: Song;
};

export default function SongCard({ song }: SongCardProps) {
  return (
    <div className="bg-white border border-stone-200 rounded-xl p-4 hover:border-orange-300 transition-colors">
      <p className="text-base font-semibold text-stone-800 mb-1">{song.title}</p>
      <p className="text-sm text-stone-600 mb-3 leading-relaxed">
        {song.description}
      </p>
      <AudioPlayer src={song.audio} label="Listen" />
    </div>
  );
}
