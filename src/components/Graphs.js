import { VerticalBarSeries, XYPlot } from "react-vis";

const Graph = ({ data }) => {
  return (
    <div>
      <XYPlot height={200} width={200}>
        <VerticalBarSeries data={data} />
      </XYPlot>
    </div>
  );
};

export default Graph;
