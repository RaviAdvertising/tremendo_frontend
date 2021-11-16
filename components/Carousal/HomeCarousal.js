import ImageComponent from "../Image/Image";
import CarouselComponent from "./Carousel";

export default function HomeCarousal(props) {
  return (
    <CarouselComponent>
      <div>
        <ImageComponent
          src={"Images/banner1.png"}
          paddingBottom={"35%"}
          alt={"banner logo"}
        />
      </div>
      <div>
        <ImageComponent
          src={"Images/banner2.png"}
          paddingBottom={"35%"}
          alt={"banner logo"}
        />
      </div>
      <div>
        <ImageComponent
          src={"Images/banner.png"}
          paddingBottom={"35%"}
          alt={"banner logo"}
        />
      </div>
    </CarouselComponent>
  );
}
