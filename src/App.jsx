import { useEffect, useState } from "react";

import Contact from "./components/Contact/Contact";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

//APP code below

const initialOptions = { good: 0, bad: 0, neutral: 0 };

function App() {
  const [options, setOptions] = useState(() => {
    const stringifiedOptions = localStorage.getItem("optionsValues");
    const parsedOptions = JSON.parse(stringifiedOptions) ?? initialOptions;
    return parsedOptions;
  });
  const handleLogOptions = (optionName) => {
    setOptions({ ...options, [optionName]: options[optionName] + 1 });
  };
  const handleReset = () => {
    setOptions(initialOptions);
  };
  const optionsTotal = options.good + options.bad + options.neutral;
  const positivePercentageCalculated =
    optionsTotal !== 0
      ? Math.round(((options.good + options.neutral) / optionsTotal) * 100)
      : 0;
      
  useEffect(() => {
    localStorage.setItem("optionsValues", JSON.stringify(options));
  }, [options]);
  return (
    <div>
      <Description />
      <Options
        handleLogOptions={handleLogOptions}
        total={optionsTotal}
        handleReset={handleReset}
      />
      {optionsTotal > 0 ? (
        <Feedback
          options={options}
          total={optionsTotal}
          positivePercentage={positivePercentageCalculated}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
