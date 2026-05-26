import {
  Container,
  Typography,
} from "@mui/material";

import Navbar from "../components/layout/Navbar";
import SearchBar from "../components/layout/SearchBar";
import CategoryTabs from "../components/layout/CategoryTabs";
import FilterBar from "../components/filters/FilterBar";
import ProductGrid from "../components/products/ProductGrid";

const Home = () => {
  return (
    <>
      <Navbar />

      <Container
        maxWidth="xl"
        sx={{
          py: {
            xs: 2,
            md: 4,
          },
        }}
      >
        <SearchBar />

        <CategoryTabs />

        <FilterBar />

        <Typography
          variant="h5"
          fontWeight="bold"
          mt={4}
        >
          Found 450 products
        </Typography>

        <ProductGrid />
      </Container>
    </>
  );
};

export default Home;