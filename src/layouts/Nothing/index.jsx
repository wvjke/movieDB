import { LinearProgress } from "@mui/material";
import "./nothing.scss";
const Nothing = () => {
  return (
    <div className="nothing">
      <LinearProgress />
      <h2 className="nothing_text">no results...</h2>
    </div>
  );
};

export default Nothing;
