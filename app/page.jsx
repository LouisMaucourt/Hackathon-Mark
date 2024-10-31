"use client"


import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { Suspense, useState, useEffect, useRef } from "react";
import { Proto } from "../components/Proto";
import Video from "../components/Video"
import VideoThree from "../components/VideoThree"
import ImageCarousel from "../components/ImageCarousel"
import CenterImageCarousel from "../components/CenterImageCarousel"
import ProductCarousel from "../components/ProductCarousel"
import ProductImage from "../components/ProductImage"
import CardText from "../components/CardText"
import Footer from "../components/assets/Footer"
import PreLoader from "../components/PreLoader"





const products = [
  {
    src: "/wifi.webp",
    alt: "Slide 1",
  },
  {
    src: "/camera.webp",
    alt: "Slide 1",
  },
  {
    src: "/clavier.webp",
    alt: "Slide 1",
  },
  {
    src: "/port_usb.webp",
    alt: "Slide 1",
  },
  {
    src: "/tor.webp",
    alt: "Slide 1",
  },
]
const slidesImageCentre = [
  {
    src: "/zoom-01.webp",
    alt: "Slide 1",
  },
  {
    src: "/zoom-02.webp",
    alt: "Slide 1",
  },
  {
    src: "/zoom-03.webp",
    alt: "Slide 1",
  },
  {
    src: "/zoom-04.webp",
    alt: "Slide 1",
  },
  {
    src: "/zoom-05.webp",
    alt: "Slide 1",
  },
]
const slides = [
  {
    src: "/adaptateur.webp",
    alt: "Slide 2",
    titre: `Adaptateur exclusif pour UniCharge xxxxxxxxxxxx`,
    caption: "Slide 2 Caption",
    buttonLink: "https://www.reddit.com/r/france/comments/igauds/recherche_groupe_platiste_fran%C3%A7ais/"
  },
  {
    src: "/clef-usb.webp",
    alt: "Slide 2",
    titre: `Adaptwebpateur exclusif pour UniCharge xxxxxxxxxxxx`,
    caption: "Slide 2 Caption",
    buttonLink: "https://www.reddit.com/r/france/comments/igauds/recherche_groupe_platiste_fran%C3%A7ais/"
  },
  {
    src: "/voyelles.webp",
    alt: "Slide 2",
    titre: `Adaptwebpateur exclusif pour UniCharge xxxxxxxxxxxx`,
    caption: "Slide 2 Caption",
    buttonLink: "https://www.reddit.com/r/france/comments/igauds/recherche_groupe_platiste_fran%C3%A7ais/"
  },
  {
    src: "/consonnes.webp",
    alt: "Slide 2",
    titre: `Adaptwebpateur exclusif pour UniCharge xxxxxxxxxxxx`,
    caption: "Slide 2 Caption",
    buttonLink: "https://www.reddit.com/r/france/comments/igauds/recherche_groupe_platiste_fran%C3%A7ais/"
  },
  {
    src: "/gant.webp",
    alt: "Slide 2",
    titre: `Adaptateur exclusif pour UniCharge xxxxxxxxxxxx`,
    caption: "Slide 2 Caption",
    buttonLink: "https://www.reddit.com/r/france/comments/igauds/recherche_groupe_platiste_fran%C3%A7ais/"
  },
  {
    src: "/housse.webp",
    alt: "Slide 2",
    titre: `Adaptateur exclusif pour UniCharge xxxxxxxxxxxx`,
    caption: "Slide 2 Caption",
    buttonLink: "https://www.reddit.com/r/france/comments/igauds/recherche_groupe_platiste_fran%C3%A7ais/"
  },
  {
    src: "/packshots.webp",
    alt: "Slide 2",
    titre: `Adaptateur exclusif pour UniCharge xxxxxxxxxxxx`,
    caption: "Slide 2 Caption",
    buttonLink: "https://www.reddit.com/r/france/comments/igauds/recherche_groupe_platiste_fran%C3%A7ais/"
  },
]

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

export default function Home() {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const panels = document.querySelector('.panelCon');
  //     if (panels) {
  //       panels.style.bottom = `${scrollTop * -1}px`; // Adjust the bottom position
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  const [isPreLoaderVisible, setPreLoaderVisible] = useState(true);

  const handleClosePreLoader = () => {
    setPreLoaderVisible(true);
  };
  return (
    <main className="h-full">
      <div className="panelCon">
        <PreLoader />
        <Video id="pane5" />
        <ImageCarousel id="" slides={slidesImageCentre} />
        <VideoThree />
        {/* <Carousel id="caracteristiques" slides={slides} /> */}
        <CenterImageCarousel slides={slides} />
        <CardText></CardText>
        <ProductImage />
        <ProductCarousel slides={products} />
        <Footer />
      </div>
    </main>
  );
}