import ImageComponent from "../Image/Image";
import CarouselComponent from "./Carousel";
import CarouselSkelton from "./CarouselSkelton";
import { DeviceContext } from "../../pages/_app";
import { useContext } from "react";

export default function HomeCarousal(props) {
  const { isMobileView } = useContext(DeviceContext);
  if (props.data.pageDataLoading) {
    return <CarouselSkelton />;
  }
  return (
    <CarouselComponent>
      {props.data.pageData.length != 0 &&
        props.data.pageData.banner.map((i, index) => (
          <div key={index}>
            <ImageComponent
              src={!isMobileView ? i.banner_url_full : i.banner_url_small}
              paddingBottom={isMobileView ? "62%" : "35%"}
              alt={"banner logo"}
            />
          </div>
        ))}
    </CarouselComponent>
  );
}
