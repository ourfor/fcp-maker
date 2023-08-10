import { AssetElement } from "./type/asset"
import { MDElement } from "./type/md"

export interface AssetProps {
    id: string,
    name: string,
    kind: string,
    src: string
    mds?: MDElement[]
}

export function Asset(props: AssetProps & AssetElement) {
    return (
        <asset key={props.uid}
            id={props.id} 
            name={props.name} 
            uid={props.uid} 
            start={typeof props.start === "number" ? `${props.start}s` : props.start} 
            duration={typeof props.duration === "number" ? `${props.duration}s` : props.duration} 
            hasVideo={typeof props.hasVideo === "boolean" ? (props.hasVideo ? "1" : "0") : props.hasVideo}
            format={props.format} 
            videoSources={props.videoSources}>
            <media-rep kind={props.kind} src={props.src}></media-rep>
            {props.mds && (
                <metadata>
                    {props.mds?.map((attrs) => <md data-key={attrs.key} {...attrs} />)}
                </metadata>
            )}
        </asset>
    )
}