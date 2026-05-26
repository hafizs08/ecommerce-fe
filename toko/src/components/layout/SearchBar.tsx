import {
  Paper,
  InputBase,
  Button,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

const SearchBar = () => {
  return (
    <Paper sx={{ p: 2, mt: 3 }}>
      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        spacing={2}
      >
        <InputBase
          placeholder="Search"
          sx={{
            flex: 1,
            border: "1px solid #ddd",
            px: 2,
            py: 1,
            borderRadius: 2,
          }}
        />

        <Select
          defaultValue="New York"
          size="small"
          fullWidth
        >
          <MenuItem value="New York">
            New York
          </MenuItem>
        </Select>

        <Button
          variant="contained"
          sx={{
            minWidth: {
              xs: "100%",
              md: 120,
            },
          }}
        >
          Search
        </Button>
      </Stack>
    </Paper>
  );
};

export default SearchBar;