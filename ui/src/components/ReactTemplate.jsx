import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

// NAME OF COMPONENT IS A ARROW FUNCTION

const PureComponent = () => {
  // VARIABLES/STATE LIVE HERE

  // FUNCTIONS/EFFECTS LIVE HERE

  // RETURN LIVES HERE
  return (
    <div>
      <p>This is a pure component</p>
    </div>
  );
};

const StatefulComponent = () => {
  const [on, setOn] = useState(false);
  const [error, setError] = useState("");
  var switchCounter = 0;

  useEffect(() => {
    // RETURN WILL CLEAN UP
  }, [switchCounter]);

  return (
    <div>
      <label>
        <input type="checkbox" checked={on} onChange={() => setOn(!on)} />
        {on ? "On" : "Off"}
      </label>

      {error ? <Typography>{error}</Typography> : <></>}
    </div>
  );
};
