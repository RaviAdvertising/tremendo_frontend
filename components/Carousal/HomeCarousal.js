import ImageComponent from "../Image/Image";
import CarouselComponent from "./Carousel";
import CarouselSkelton from "./CarouselSkelton";

export default function HomeCarousal(props) {
  if (props?.data?.pageDataLoading) {
    return <CarouselSkelton />;
  }
  return (
    <CarouselComponent>
      {props?.data?.pageData?.banner.map((i, index) => (
        <div key={index}>
          <ImageComponent
            src={i.banner_url_full}
            paddingBottom={"35%"}
            alt={"banner logo"}
          />
        </div>
      ))}
    </CarouselComponent>
  );
}
