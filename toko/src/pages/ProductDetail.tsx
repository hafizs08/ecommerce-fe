import {
  Box,
  Container,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getProductDetail,
} from "../services/productService";

import type { Product } from "../types/product";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] =
    useState<Product | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const data = await getProductDetail(
        Number(id)
      );

      setProduct(data);
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

  if (!product) return null;

  return (
    <Container sx={{ py: 5 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <img
            src={
              product.images?.[0]?.imageUrl
            }
            alt={product.name}
            style={{
              width: "100%",
              borderRadius: 12,
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h4">
            {product.name}
          </Typography>

          <Typography
            variant="h5"
            color="primary"
            sx={{ mt: 2 }}
          >
            Rp{" "}
            {Number(
              product.price
            ).toLocaleString("id-ID")}
          </Typography>

          <Typography sx={{ mt: 2 }}>
            {product.description}
          </Typography>

          <Typography sx={{ mt: 2 }}>
            Stock: {product.stock}
          </Typography>

          <Typography sx={{ mt: 1 }}>
            Category:
            {" "}
            {product.category.name}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;