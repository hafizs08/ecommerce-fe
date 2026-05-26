import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { products } from "./products";

const ProductGrid = () => {
  return (
    <Grid container spacing={3} sx={{ mt: 1 }}>
      {products.map((product) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;