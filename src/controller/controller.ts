import { mockDataList } from "@/controller/mockData";
import { Track } from "@/model/Track";
import { TrackListType } from "@/types/types";
import { mount } from "redom";
import { playerView } from "@/view/components/playerView";
import { mainPageView } from "@/view/pages/mainPageView";

export function controller(): void {
  const tracks: TrackListType = mockDataList.map(data => new Track(data));
  mount(document.body, mainPageView(tracks));
  mount(document.body, playerView());
}
