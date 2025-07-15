import Herosection from "./components/Herosection";
import Catalogue from "./components/Catalogue";
import Navbar from "./components/Navbar";

export {homeMetadata as metadata} from "./utils/metadata";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Catalogue />
      <Herosection />
    </>
  );
}
