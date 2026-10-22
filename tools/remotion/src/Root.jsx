import { Composition, Still } from "remotion";
import { Prologue, PROLOGUE_FRAMES } from "./Prologue.jsx";
import { OgImage } from "./OgImage.jsx";

export const Root = () => (
  <>
    <Composition id="Prologue" component={Prologue} durationInFrames={PROLOGUE_FRAMES} fps={30} width={1280} height={720} />
    <Still id="OgImage" component={OgImage} width={1200} height={630} />
  </>
);
