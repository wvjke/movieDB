import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Arrows = ({ swiper }) => {
  return (
    <>
      <div className="arrow_prev" onClick={() => swiper.slidePrev()}>
        <ArrowBackIosNewIcon fontSize="large" />
      </div>
      <div className="arrow_next" onClick={() => swiper.slideNext()}>
        <ArrowForwardIosIcon fontSize="large" />
      </div>
    </>
  );
};

export default Arrows;
