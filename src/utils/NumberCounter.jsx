import CountUp from "react-countup";
const NumberCounter = ({ start, end }) => {
  return (
    <CountUp start={start} end={end} enableScrollSpy>
      {({ countUpRef }) => <span ref={countUpRef} />}
    </CountUp>
  );
};
export default NumberCounter;
