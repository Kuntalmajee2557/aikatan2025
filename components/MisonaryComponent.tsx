import { masonryData } from "@/data/gallery";
import Masonry from "./ui/Misonary";


export default function MisonaryComponent() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Masonry Grid</h1>
      <Masonry data={masonryData} /> {/* Pass data as props */}
    </div>
  );
}