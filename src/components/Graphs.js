import { VerticalBarSeries, XYPlot } from "react-vis";

const Graph = ({ color, data }) => {
  return (
    <div style={{ marginLeft: "25px" }}>
      <XYPlot height={250} width={275}>
        <VerticalBarSeries color={color} data={data} />
      </XYPlot>
    </div>
  );
};

export default Graph;
