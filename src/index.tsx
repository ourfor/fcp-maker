import { Asset } from './components/Asset';
import { v4 as uuidv4 } from 'uuid';
import XMLFormatter from "xml-formatter"

const mds = [
  { key: "com.apple.proapps.studio.rawToLogConversion", value: "0" },
  { key: "com.apple.proapps.spotlight.kMDItemProfileName", value: "sRGB IEC61966-2.1" },
  { key: "com.apple.proapps.studio.cameraISO", value: "0" },
  { key: "com.apple.proapps.studio.cameraColorTemperature", value: "0" },
  { key: "com.apple.proapps.mio.ingestDate", value: "2023-08-10 07:28:59 +0800" },
  { key: "com.apple.proapps.spotlight.kMDItemOrientation", value: "0" }
]
const files = [
  "/Users/ourfor/Code/fcp-maker/src/asset/阿轲-节奏热浪_1920x1440.jpg",
  "/Users/ourfor/Code/fcp-maker/src/asset/艾琳-奇遇舞章壁纸_1920x1440.jpg",
  "/Users/ourfor/Code/fcp-maker/src/asset/安琪拉-心灵骇客_1920x1440.jpg",
  "/Users/ourfor/Code/fcp-maker/src/asset/蔡文姬-花朝如约壁纸_1920x1440.jpg",
  "/Users/ourfor/Code/fcp-maker/src/asset/嫦娥-拒霜思壁纸_1920x1440.jpg",
  "/Users/ourfor/Code/fcp-maker/src/asset/妲己-女仆咖啡_1920x1440.jpg",
  "/Users/ourfor/Code/fcp-maker/src/asset/貂蝉-幻阙歌_1920x1440.jpg",
  "/Users/ourfor/Code/fcp-maker/src/asset/貂蝉-仲夏夜之梦壁纸_1920x1440.jpg",
  "/Users/ourfor/Code/fcp-maker/src/asset/露娜·一生所爱_1920x1440.jpg",
  "/Users/ourfor/Code/fcp-maker/src/asset/娜可露露-前尘镜壁纸_1920x1440.jpg",
  "/Users/ourfor/Code/fcp-maker/src/asset/偶像歌手-王昭君_1920x1440.jpg",
  "/Users/ourfor/Code/fcp-maker/src/asset/青丘·九尾-妲己_1920x1440.jpg",
  "/Users/ourfor/Code/fcp-maker/src/asset/孙尚香 水果甜心壁纸_1920x1440.jpg",
  "/Users/ourfor/Code/fcp-maker/src/asset/仙境爱丽丝·妲己_1920x1440.jpg",
  "/Users/ourfor/Code/fcp-maker/src/asset/瑶-时之祈愿壁纸_1920x1440.jpg",
  "/Users/ourfor/Code/fcp-maker/src/asset/银翎春语-杨玉环_1920x1440.jpg",
]
const assets = files.map((file, i) => ({
  id: `r${i + 8}`,
  name: file.substring(file.lastIndexOf("/") + 1).replaceAll(/(壁纸)|(\.jpg)/g, "").replace("_1920x1440", ""),
  src: file,
  uid: `asset-${i}`
}))

const xml = (
  <fcpxml version="1.11">
    <resources>
      <format id="r1" name="FFVideoFormat1080p60" frameDuration="100/6000s" width="1920" height="1080" colorSpace="1-1-1 (Rec. 709)" />
      <format id="r2" name="FFVideoFormatRateUndefined" width="1920" height="1440" colorSpace="1-13-1" />
      <effect id="r3" name="高斯曲线" uid=".../Effects.localized/Blur.localized/Gaussian.localized/Gaussian.moef" />
      <effect id="r4" name="简单边框" uid=".../Effects.localized/Stylize.localized/Simple Border.localized/Simple Border.moef" />
      <effect id="r5" name="滑动" uid="FxPlug:6AAB0D54-FCD8-4EBD-A62D-D352A5ED1648" />
      <effect id="r6" name="音频交叉淡入淡出" uid="FFAudioTransition" />
      <effect id="r7" name="交叉叠化" uid="FxPlug:4731E73A-8DAC-4113-9A30-AE85B1761265" />
      {assets.map((asset, i) =>
        <Asset key={i}
          id={asset.id}
          name={asset.name}
          kind={"original-media"}
          src={asset.src}
          mds={mds}
          uid={asset.uid}
          start={0} duration={0} hasVideo={true}
          format={'r2'}
          videoSources={'1'} />
      )}
    </resources>
    <library location="file:///Users/ourfor/Movies/%E6%B5%8B%E8%AF%95.fcpbundle/">
      <event name="2022-8-11" uid="CF1B3C73-D024-4600-936B-E1CD2EDFB304">
        <project name="测试" uid="C2A509F7-774D-485E-929F-1FE16F3B2BEE" modDate="2023-08-10 +0800 上午7:55:59 +0800">
          <sequence format="r1" duration={`${assets.length}s`} tcStart="0s" tcFormat="NDF" audioLayout="stereo" audioRate="48k">
            <spine>
              {assets.map(({ id, name }, i) =>
                <>
                {i !== 0 &&
                  <transition key={`effect-${i}`} name="交叉叠化" offset={`${i===0 ? 0 : i*6000-1000}/6000s`} duration="2000/6000s">
                    <filter-video data-ref="r7" name="交叉叠化">
                      <data data-key="effectConfig">YnBsaXN0MDDUAQIDBAUGBwpYJHZlcnNpb25ZJGFyY2hpdmVyVCR0b3BYJG9iamVjdHMSAAGGoF8QD05TS2V5ZWRBcmNoaXZlctEICVRyb290gAGlCwwVFhdVJG51bGzTDQ4PEBIUV05TLmtleXNaTlMub2JqZWN0c1YkY2xhc3OhEYACoROAA4AEXXBsdWdpblZlcnNpb24QAdIYGRobWiRjbGFzc25hbWVYJGNsYXNzZXNfEBNOU011dGFibGVEaWN0aW9uYXJ5oxocHVxOU0RpY3Rpb25hcnlYTlNPYmplY3QIERokKTI3SUxRU1lfZm55gIKEhoiKmJqfqrPJzdoAAAAAAAABAQAAAAAAAAAeAAAAAAAAAAAAAAAAAAAA4w==</data>
                      <param name="外观" data-key="1" value="11 (视频)" />
                      <param name="数量" data-key="2" value="50" />
                      <param name="减弱" data-key="50" value="2 (入点和出点)" />
                      <param name="减弱量" data-key="51" value="0" />
                    </filter-video>
                    <filter-audio data-ref="r6" name="音频交叉淡入淡出" />
                  </transition>
                }
                  <fcp-video key={i} data-ref={id} offset={`${i}s`} name={name} start="3600s" duration="1s">
                    <adjust-transform scale="1.35 1.35" />
                    <spine lane={`${i + 1}`} offset="3600s" format="r1">
                      <transition name="滑动" offset="0s" duration="2000/6000s">
                        <filter-video data-ref="r5" name="滑动">
                          <param name="类型" key="5" value="0 (幻灯片入)" />
                          <param name="方向" key="4" value="2 (右)" />
                          <param name="角度" key="1" value="0" />
                        </filter-video>
                        <filter-audio data-ref="r6" name="音频交叉淡入淡出" />
                      </transition>
                      <fcp-video data-ref={id} offset="0s" name={name} start="3600s" duration={`${assets.length - i}s`}>
                        <adjust-transform rotation={Math.sin(Math.PI * 2 * i / 8) * 8 % 10}
                          scale="0.85 0.85" />
                        <filter-video data-ref="r4" name="简单边框" />
                      </fcp-video>
                    </spine>
                    <filter-video data-ref="r3" name="高斯曲线" />
                  </fcp-video>
                </>
              )}
            </spine>
          </sequence>
        </project>
      </event>
    </library>
  </fcpxml>
)

type JSXElement = typeof xml

function renderJSXToXML(element: JSXElement | JSXElement[]): string {
  if (Array.isArray(element)) {
    return element.map(e => renderJSXToXML(e)).join("\n")
  }
  const { type, props, key } = element;
  if (typeof type === "string") {
    const { children, ...attrs } = props ?? {}
    const attributes = Object.keys(attrs)
      .filter(key => attrs[key])
      .map((key) => `${key.replace("data-", "")}="${attrs[key]}"`)
      .join(" ");

    const tag = type.replace("fcp-", "")
    if (!children) {
      return attributes ? `<${tag} ${attributes} />` : `<${type.replace("fcp-", "")} />`;
    }

    const childXML = Array.isArray(children)
      ? children.map(renderJSXToXML).join("\n")
      : renderJSXToXML(children);

    return `<${tag} ${attributes}>${childXML}</${tag}>`;
  } else if (typeof type === "function") {
    const component = type(props)
    return renderJSXToXML(component)
  } else {
    const { children, ...attrs } = props ?? {}
    if (children) {
      return renderJSXToXML(children)
    }
    return ""
  }
}

const root = document.getElementById("root")
if (root && xml) {
  const content = renderJSXToXML(xml)
  root.innerText = XMLFormatter(content)
}