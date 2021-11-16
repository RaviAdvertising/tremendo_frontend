import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function CarouselComponent(props) {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
      dynamicHeight={true}
      interval={5000}
      stopOnHover={false}
      showThumbs={false}
    >
      {props.children}
    </Carousel>
  );
}
