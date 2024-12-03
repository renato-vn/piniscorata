// Images
import PiniscoValpo1 from "./assets/imgs/IMG_3312.webp";
import PiniscoValpo2 from "./assets/imgs/021_7796.webp";
import PiniscoValpo3 from "./assets/imgs/021_7800 2.webp";
import PiniscoValpo4 from "./assets/imgs/021_7797.webp";
import PiniscoValpo5 from "./assets/imgs/021_7804.webp";
import PiniscoValpo6 from "./assets/imgs/IMG_3311.webp";

// Icons
import { GrInstagram } from "react-icons/gr";
import { RiSoundcloudLine, RiYoutubeLine } from "react-icons/ri";
import { SlSocialSpotify } from "react-icons/sl";
import { SiGmail } from "react-icons/si";
import { TbGenderTransgender } from "react-icons/tb";

// Components
import Footer from "./components/Footer";
import ImageFromGallery from "./components/ImageFromGallery";
import SoundCloudSong from "./components/SoundCloudSong";
import Paragraph from "./components/Paragraph";
import SocialIcoLink from "./components/SocialIcoLink";

const App = () => {
  return (
    <>
      {/* SECCIÓN 1 */}
      <section className="flex flex-col items-center p-20 bg-orange-500 justify-evenly mb-5">
        <div>
          <img
            className="object-cover rounded-lg h-80 md:h-96 object-bottom mb-5"
            width={400}
            height={200}
            alt="piñisco🐭"
            src={PiniscoValpo1}
          />
          <div className="flex gap-2 items-center justify-center mb-5">
            <TbGenderTransgender className="text-6xl text-white hover:text-purple-900" />
            <div className="text-center text-xl md:text-start text-purple-900 md:text-2xl font-mynerve">
              Pronombres: Él
            </div>
            <iframe
              src="https://giphy.com/embed/ZNSzHf2UK6Ul87ktD0"
              width="60"
              height="60"
              className="giphy-embed rounded-full "
              allowFullScreen
              style={{ pointerEvents: "none" }}
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="font-knewave text-center md:text-start text-5xl text-purple-900 md:hover:text-purple-900 md:text-white mb-5">
            Piñisco
          </div>

          <Paragraph text="¡Hola! Soy Piñisco, un artista cuya esencia nace del deseo profundo de expresar y exteriorizar lo que siento. Mi primer acercamiento con la música fue a través de la guitarra, que comencé a aprender cuando tenía 7 u 8 años. Desde entonces, supe que la música sería mi forma de comunicarme con el mundo." />

          <Paragraph text="A lo largo de los años, he seguido explorando distintos instrumentos, como la batería y el bajo. De hecho, me gusta tocar cualquier instrumento que me llame la atención, ya que suelo tocar por oído. Esta capacidad me ha permitido enriquecer mi creatividad y experimentar con diferentes sonidos y estilos." />

          <Paragraph text="En 2012 comencé a adentrarme en la producción musical con programas como VirtualDJ y FL Studio (antes conocido como Fruity Loops). Aunque mi inicio fue digital, mi base acústica y mi habilidad para tocar diferentes instrumentos siempre han estado presentes en mi proceso creativo, lo que me ha permitido fusionar lo orgánico y lo electrónico de una manera única." />

          <Paragraph text="Hoy en día, mi música fluye entre la música urbana y géneros más orgánicos como el indie, el folk y otros que continúan inspirando mi evolución artística." />

          <Paragraph text="Actualmente, sigo formándome y perfeccionando mi arte. Estoy tomando un curso de mezcla y mastering, además de desempeñarme como DJ, productor musical y cantante. Me encargo de todas mis producciones, desde la creación hasta la finalización de mis canciones, siempre con el objetivo de plasmar mi visión personal en cada proyecto." />

          <div className="flex items-center justify-center md:justify-start gap-4 text-white text-2xl">
            <SocialIcoLink
              link="https://www.instagram.com/piniscorata/"
              ico={<GrInstagram />}
            />

            <SocialIcoLink
              link="https://soundcloud.com/pinisco"
              ico={<RiSoundcloudLine className="text-4xl" />}
            />

            <SocialIcoLink
              link="https://open.spotify.com/artist/4zDYaqAuSAKvhc6IJoQFhA?si=J4g9zrm4QcuNzwJIMwQ1lQ&nd=1"
              ico={<SlSocialSpotify className="text-3xl" />}
            />

            <SocialIcoLink
              link="https://www.youtube.com/@piniscorata_"
              ico={<RiYoutubeLine className="text-3xl" />}
            />

            <SocialIcoLink
              link="mailto:piniscorata@gmail.com"
              ico={<SiGmail className="text-3xl" />}
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 */}
      <section className="flex flex-col items-center justify-center mb-10">
        <SoundCloudSong url="https://soundcloud.com/pinisco/mariobrosswave" />
        <SoundCloudSong url="https://soundcloud.com/pinisco/abstinencia" />
        <SoundCloudSong url="https://soundcloud.com/pinisco/drumandbass" />
        <SoundCloudSong url="https://soundcloud.com/pinisco/m-basura-espacial" />
        <SoundCloudSong url="https://soundcloud.com/pinisco/flotrap" />
        <SoundCloudSong url="https://soundcloud.com/pinisco/australopithecus" />
      </section>

      {/* SECCIÓN 3 */}
      <section className="flex flex-wrap items-center justify-center bg-orange-500 gap-5 md:px-60 py-20">
        <ImageFromGallery img={PiniscoValpo2} />
        <ImageFromGallery img={PiniscoValpo3} />
        <ImageFromGallery img={PiniscoValpo1} />
        <ImageFromGallery img={PiniscoValpo4} />
        <ImageFromGallery img={PiniscoValpo5} />
        <ImageFromGallery img={PiniscoValpo6} />
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default App;
