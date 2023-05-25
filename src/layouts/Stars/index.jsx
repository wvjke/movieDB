import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import { useEffect, useState } from "react";
const Stars = ({ vote }) => {
  const [stars, setStars] = useState(null);

  useEffect(() => {
    starsCount();
  }, []);

  const starsCount = () => {
    const view = [];
    for (let i = 1; i <= 10; i++) {
      if (i <= vote) {
        view.push(<StarIcon color="primary" key={i} />);
      } else {
        view.push(<StarBorderOutlinedIcon key={i} />);
      }
    }
    setStars(view);
  };

  return <>{stars}</>;
};

export default Stars;
