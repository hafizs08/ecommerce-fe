import { api } from "../api/axios";

interface ProductParams {
  search?: string;
  categoryId?: number;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: string;
  sortOrder?: string;
  page?: number;
  perPage?: number;
}

export const getProducts = async (
  params?: ProductParams
) => {
  const response = await api.get("/products", {
    params,
  });

  return response.data.data;
};

export const getProductDetail = async (
  id: number
) => {
  const response = await api.get(
    `/products/${id}`
  );

  return response.data.data;
};