import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Article from "./components/Article";
import TableSection from "./components/TableSection";
import Aside  from "./components/Aside";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
    <Navbar />
    <Header />
    <Hero />
    <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto p-6 items-start">
  <main className="md:col-span-2 space-y-6">
    <Article />
    <TableSection />
  </main>
  <Aside />
</div>
<Footer />
    </>
  )
}