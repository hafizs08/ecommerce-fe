import {
  Paper,
  Select,
  MenuItem,
  Stack,
  Button,
} from "@mui/material";

const FilterBar = () => {
  return (
    <Paper sx={{ p: 2, mt: 3 }}>
      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        spacing={2}
      >
        <Select
          fullWidth
          defaultValue="Electronics"
          size="small"
        >
          <MenuItem value="Electronics">
            Electronics
          </MenuItem>
        </Select>

        <Select
          fullWidth
          defaultValue="All Brands"
          size="small"
        >
          <MenuItem value="All Brands">
            All Brands
          </MenuItem>
        </Select>

        <Select
          fullWidth
          defaultValue="Price Range"
          size="small"
        >
          <MenuItem value="Price Range">
            Price Range
          </MenuItem>
        </Select>

        <Button
          variant="outlined"
          fullWidth
        >
          Filters
        </Button>
      </Stack>
    </Paper>
  );
};

export default FilterBar;