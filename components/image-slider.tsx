import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import Image from "next/image";
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

type Props = {
  images: string[];
};

const imageSlider = ({ images }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider rounded-3xl">
        {images.map((image, index) => (
          <div key={index} className="keen-slider__slide">
            <Image
              className="shadow-sm w-full"
              key={index}
              src={image}
              alt={""}
              width={1300}
              height={630}
            />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <div className="flex flex-row justify-between min-w-full text-6xl md:text-9xl absolute top-[40%] z-20">
          <MdChevronLeft
            className="text-geraniumlake hover:text-satingold bg-jet rounded-tr-xl rounded-br-xl"
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
          />

          <MdChevronRight
            className="text-geraniumlake hover:text-satingold bg-jet rounded-tl-xl rounded-bl-xl"
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
          />
        </div>
      )}
    </div>
  );
};

export default imageSlider;
