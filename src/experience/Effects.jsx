import { EffectComposer, Bloom, Glitch } from "@react-three/postprocessing";
export default function Effects() {
  return (
    <EffectComposer>
      <Bloom intensity={0.5} luminanceThreshold={0.2} />
      <Glitch delay={[2, 5]} duration={[0.1, 0.3]} strength={[0.01, 0.03]} active={false}/>
    </EffectComposer>
  );
}
