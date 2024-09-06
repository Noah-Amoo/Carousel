import Carousel from "@/components/carousel/page";

import img1 from '@/public/images/1.jpg'
import img2 from '@/public/images/2.jpg'
import img3 from '@/public/images/3.jpg'
import img4 from '@/public/images/4.jpg'
import img5 from '@/public/images/5.jpg'
import img6 from '@/public/images/6.jpg'
import Image from "next/image";

const Slides = [
  img1, img2, img3, img4, img5, img6,
]


export default function Home() {
  return (
    <div className="max-w">
      <Carousel slideLength={Slides.length} autoSlide autoSlideInterval={3000}>
          {
            Slides.map((s, index) => (
              <Image src={s} key={index} alt={`Slide ${index + 1}`} />
            ))
          }
      </Carousel>
    </div>
  );
}
