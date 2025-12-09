import { TrackType } from "@/types/types";

export class Track implements TrackType {
  id: number;
  title: string;
  artist: string;
  duration: number;
  size_mb: number;
  encoded_audio: string;

  constructor(data: TrackType) {
    this.id = data.id;
    this.title = data.title;
    this.artist = data.artist;
    this.duration = data.duration;
    this.size_mb = data.size_mb;
    this.encoded_audio = data.encoded_audio;
  }
}

