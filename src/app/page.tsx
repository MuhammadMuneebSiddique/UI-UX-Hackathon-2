import Image from "next/image";
import Header from "./components/header/page"
import Footer from "./components/footer/page"
import Main from "./components/main/page"

export default function Home() {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}
