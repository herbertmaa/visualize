import LinearProgress from "@material-ui/core/LinearProgress";
import "./LinearProgressLabel.scss";

const LinearProgressLabel = ({ progress, value }) => {
  return (
    <div className="LinearProgressContainer">
      <LinearProgress
        style={{ display: "inline-block", width: "45vw" }}
        variant="determinate"
        value={value}
      />
      <p style={{ display: "inline-block" }}> {Math.round(progress)} % </p>
    </div>
  );
};

export default LinearProgressLabel;
