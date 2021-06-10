import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const SortDropDown = ({ isDisabled, handleChange }) => {
  return (
    <FormControl
      disabled={isDisabled}
      id="sort-form-control"
      style={{ margin: "50px" }}
    >
      <InputLabel
        id="sort-form-label"
        style={{ position: "relative", color: "black", fontSize: "2rem" }}
        shrink
        htmlFor="age-native-label-placeholder"
      >
        Sorting Algorithmn
      </InputLabel>

      <Select id="open-sort-select" onChange={handleChange} defaultValue={0}>
        <MenuItem value={0}>Bubble Sort</MenuItem>
        <MenuItem value={1}>Merge Sort</MenuItem>
        <MenuItem value={2}>Selection Sort</MenuItem>
        <MenuItem value={3}>Insertion Sort</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortDropDown;
