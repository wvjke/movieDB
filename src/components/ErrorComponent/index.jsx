import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Collapse } from "@mui/material";
import { Link } from "react-router-dom";
const ErrorComponent = () => {
  const handleClick = () => {
    window.location.reload(false);
  };

  return (
    <>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Collapse in={open}>
          <Alert severity="warning" variant="filled">
            Something went wrong...
          </Alert>
        </Collapse>
      </Stack>
      <Link to="/">
        <button
          className="btn_back"
          style={{ marginTop: "20px" }}
          onClick={handleClick}
        >
          Back
        </button>
      </Link>
    </>
  );
};

export default ErrorComponent;
