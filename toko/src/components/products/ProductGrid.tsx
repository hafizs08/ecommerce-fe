import { useEffect, useState } from "react";
import { Grid, CircularProgress, Box } from "@mui/material";

import ProductCard from "./ProductCard";
import { getProducts } from "../../services/productService";
import type { Product } from "../../types/product";

interface Props {
  filters: any;
}

const ProductGrid = ({
  filters,
}: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const data = await getProducts(filters);

      setProducts(data.items);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
          }}
          key={product.id}
        >
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;