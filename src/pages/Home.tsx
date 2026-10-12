// import { hobbies } from '../content/site';
// import { ConcaveCarousel } from '../components/ConcaveCarousel';
import { Contact, Footer } from '../components/Contact';
import { Hero } from '../components/Hero';
import { Journey } from '../components/Journey';
import { Now } from '../components/Now';
import { Projects } from '../components/Projects';
import { ShipIt } from '../components/ShipIt';
import { Spine } from '../components/Spine';

export default function Home() {
  return (
    <>
      <Spine />
      <main>
        <Hero />
        <Now />
        <Projects />
        <Journey />
        {/* <section className="block tight" id="off" aria-labelledby="off-title">
          <div className="head"><h2 id="off-title">Off the clock</h2><p>Spin the wall, tap a card to open it</p></div>
          <ConcaveCarousel items={hobbies} label="Interests" />
        </section> */}
        <ShipIt />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
