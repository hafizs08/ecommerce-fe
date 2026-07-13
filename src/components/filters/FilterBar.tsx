import {
  Paper,
  Select,
  MenuItem,
  Stack,
  Button,
  TextField,
} from "@mui/material";

interface Props {
  filters: any;
  setFilters: any;
  onApply: () => void;
}

const FilterBar = ({
  filters,
  setFilters,
  onApply,
}: Props) => {
  return (
    <Paper sx={{ p: 2, mt: 3 }}>
      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        spacing={2}
      >
        <TextField
          label="Min Price"
          type="number"
          fullWidth
          size="small"
          value={filters.minPrice}
          onChange={(e) =>
            setFilters({
              ...filters,
              minPrice: e.target.value,
            })
          }
        />

        <TextField
          label="Max Price"
          type="number"
          fullWidth
          size="small"
          value={filters.maxPrice}
          onChange={(e) =>
            setFilters({
              ...filters,
              maxPrice: e.target.value,
            })
          }
        />

        <Select
          fullWidth
          size="small"
          value={filters.sortOrder}
          onChange={(e) =>
            setFilters({
              ...filters,
              sortOrder: e.target.value,
            })
          }
        >
          <MenuItem value="asc">
            Lowest Price
          </MenuItem>

          <MenuItem value="desc">
            Highest Price
          </MenuItem>
        </Select>

        <Button
          variant="contained"
          onClick={onApply}
        >
          Apply
        </Button>
      </Stack>
    </Paper>
  );
};

export default FilterBar;