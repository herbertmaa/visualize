import { VerticalBarSeries, XYPlot } from "react-vis";

const Graph = ({ color, data }) => {
  return (
    <div>
      <XYPlot height={200} width={200}>
        <VerticalBarSeries color={color} data={data} />
      </XYPlot>
    </div>
  );
};

export default Graph;
