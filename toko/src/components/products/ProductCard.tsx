import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import type { Product } from "../../types/product";
import { useNavigate } from "react-router-dom";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        height: "100%",
        cursor: "pointer",
      }}
      onClick={() =>
        navigate(`/products/${product.id}`)
      }
    >
      <CardMedia
        component="img"
        image={product.images?.[0]?.imageUrl}
        alt={product.name}
        sx={{
          height: 220,
          objectFit: "cover",
        }}
      />

      <CardContent>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600 }}
          gutterBottom
        >
          {product.name}
        </Typography>

        <Typography
          variant="h6"
          color="primary"
          sx={{ fontWeight: "bold" }}
        >
          Rp {Number(product.price).toLocaleString("id-ID")}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          Stok: {product.stock}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          {product.category.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;