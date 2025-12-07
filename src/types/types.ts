import {z} from 'zod';

export const TrackSchema = z.object({
  id: z.number(),
  title: z.string(),
  artist: z.string(),
  duration: z.number(),
  size_mb: z.number(),
  encoded_audio: z.string(),
})
export type TrackType = z.infer<typeof TrackSchema>;

export const TrackListSchema = z.array(TrackSchema);
export type TrackListType = z.infer<typeof TrackListSchema>;
