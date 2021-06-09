import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "./RandomSlider.scss";

const marks = [
  {
    value: 10,
    label: "10",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 30,
    label: "30",
  },
  {
    value: 40,
    label: "40",
  },
  {
    value: 50,
    label: "50",
  },
  {
    value: 60,
    label: "60",
  },
  {
    value: 70,
    label: "70",
  },
  {
    value: 80,
    label: "80",
  },
  {
    value: 90,
    label: "90",
  },
  {
    value: 100,
    label: "100",
  },
];

const RandomSlider = ({ handleChange }) => {
  return (
    <div className="RandomSlider">
      <Typography id="discrete-slider-always" gutterBottom>
        Generate some random values 🎲
      </Typography>
      <Slider
        defaultValue={50}
        aria-labelledby="discrete-slider-always"
        step={10}
        min={10}
        max={100}
        marks={marks}
        valueLabelDisplay="on"
        onChange={handleChange}
      />
    </div>
  );
};

export default RandomSlider;
