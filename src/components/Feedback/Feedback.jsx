// import clsx from "clsx";
// import css from "./Profile.module.css";

const Feedback = ({options, total, positivePercentage}) => {
  return (
    <ul>
      <li>Good: {options.good}</li>
      <li>Neutral: {options.neutral}</li>
      <li>Bad: {options.bad}</li>
      <li>Total: <b>{total}</b> </li>
      <li>Positive: {positivePercentage} % </li>
    </ul>
  );
};

export default Feedback;
