import { mockDataList } from "@/controller/mockData";
import { Track } from "@/model/Track";
import { TrackListType } from "@/types/types";
import { renderMainPages } from "@/controller/renderPages";

export function controller(): void {
  const tracks: TrackListType = mockDataList.map(data => new Track(data));
  renderMainPages(tracks);
}
