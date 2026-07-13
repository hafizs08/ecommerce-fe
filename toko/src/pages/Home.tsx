import { useState } from "react";

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
    const [filters, setFilters] = useState({
        search: "",
        minPrice: "",
        maxPrice: "",
        sortBy: "price",
        sortOrder: "asc",
    });

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
                <SearchBar
                    search={filters.search}
                    setSearch={(value) =>
                        setFilters({
                            ...filters,
                            search: value,
                        })
                    }
                />

                <CategoryTabs />

                <FilterBar
                    filters={filters}
                    setFilters={setFilters}
                    onApply={() => { }}
                />

                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: "bold",
                        mt: 4,
                    }}
                >
                    Found 450 products
                </Typography>

                <ProductGrid filters={filters} />
            </Container>
        </>
    );
};

export default Home;