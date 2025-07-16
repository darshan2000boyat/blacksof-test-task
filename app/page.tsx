import Herosection from "./components/Herosection";
import Catalogue from "./components/Catalogue/Catalogue";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export {homeMetadata as metadata} from "./utils/metadata";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Catalogue />
      <ContactUs />
      <Footer />
    </>
  );
}
