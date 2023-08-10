import { AdjustTransformElement } from "./components/type/adjust-transform";
import { AssetElement } from "./components/type/asset";
import { EffectElement } from "./components/type/effect";
import { EventElement } from "./components/type/event";
import { FCPXMLElement } from "./components/type/fcpxml";
import { FilterVideoElement } from "./components/type/filter-video";
import { FormatElement } from "./components/type/format";
import { LibraryElement } from "./components/type/library";
import { MDElement } from "./components/type/md";
import { MediaRepElement } from "./components/type/media-rep";
import { MetadataElement } from "./components/type/metadata";
import { ProjectElement } from "./components/type/project";
import { ResourcesElement } from "./components/type/resources";
import { SequenceElement } from "./components/type/sequence";
import { SpineElement } from "./components/type/spine";
import { VideoElement } from "./components/type/video";

type Element<T> = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & Partial<T>

declare global {
  namespace JSX {
    interface IntrinsicElements {
      asset: Element<AssetElement>,
      'media-rep': Element<MediaRepElement>,
      metadata: Element<MetadataElement>,
      md: Element<MDElement>,
      format: Element<FormatElement>,
      resources: Element<ResourcesElement>,
      fcpxml: Element<FCPXMLElement>,
      library: Element<LibraryElement>,
      event: Element<EventElement>,
      project: Element<ProjectElement>,
      sequence: Element<SequenceElement>,
      spine: Element<SpineElement>,
      "fcp-video": Element<VideoElement>,
      "adjust-transform": Element<AdjustTransformElement>,
      "filter-video": Element<FilterVideoElement>,
      "effect": Element<EffectElement>,
      "transition": Element<EffectElement>,
      "filter-audio": Element<FilterVideoElement>,
    }
  }
}