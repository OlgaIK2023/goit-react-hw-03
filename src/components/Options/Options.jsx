
import "./Options.module.css";

// import clsx from "clsx"

const Options = ({
  handleLogOptions,
  handleReset,
  total,
}) => {
  

    

  return (
    <div>
      <button onClick={() => handleLogOptions("good")}>Good</button>
      <button onClick={() => handleLogOptions("neutral")}>Neutral</button>
      <button onClick={() => handleLogOptions("bad")}>Bad</button>
      {total !== 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};

export default Options;
