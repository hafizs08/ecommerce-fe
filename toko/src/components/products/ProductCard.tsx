import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    IconButton,
    Box,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface Props {
    product: {
        name: string;
        price: string;
        image: string;
    };
}

const ProductCard = ({ product }: Props) => {
    return (
        <Card
            sx={{
                borderRadius: 3,
            }}
        >
            <CardMedia
                component="img"
                height="220"
                image={product.image}
            />

            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography sx={{ fontWeight: 500 }}>
                        {product.name}
                    </Typography>

                    <IconButton>
                        <FavoriteBorderIcon />
                    </IconButton>
                </Box>

                <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", mt: 1 }}
                >
                    {product.price}
                </Typography>

                <Typography color="gray">
                    Brand new
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;