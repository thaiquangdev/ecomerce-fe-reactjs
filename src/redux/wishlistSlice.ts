import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createWishlistApi,
  deleteWishlistApi,
  getWishlistsApi,
} from "../services/apis/wishlist";

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  quantity: number; // Thêm trường số lượng
}

interface WishlistState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  items: WishlistItem[];
  totalItems: number; // Thêm trường tổng số lượng
  count: number; // Thêm trường đếm wishlist
}

const initialState: WishlistState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  items: [],
  totalItems: 0, // Khởi tạo tổng số lượng là 0
  count: 0, // Khởi tạo số lượng wishlist là 0
};

export const createWishlist = createAsyncThunk(
  "wishlist/create",
  async (pid: string) => {
    const response = await createWishlistApi(pid);
    return response?.data;
  }
);

export const deleteWishlist = createAsyncThunk(
  "wishlist/delete",
  async (pid: string) => {
    const response = await deleteWishlistApi(pid);
    return response?.data;
  }
);

export const fetchWishlists = createAsyncThunk(
  "wishlist/fetch",
  async (pid: string) => {
    const response = await getWishlistsApi(pid);
    return response?.data;
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.items.push(action.payload); // Thêm mục mới vào danh sách
        state.totalItems += action.payload.quantity; // Cập nhật tổng số lượng
        state.count += 1; // Tăng số lượng wishlist
      })
      .addCase(createWishlist.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deleteWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const itemToRemove = state.items.find(
          (item) => item.id === action.payload.id
        );
        if (itemToRemove) {
          state.totalItems -= itemToRemove.quantity; // Giảm tổng số lượng
          state.count -= 1; // Giảm số lượng wishlist
        }
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteWishlist.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchWishlists.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWishlists.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.items = action.payload; // Cập nhật danh sách yêu thích
        state.totalItems = action.payload.reduce(
          (total, item) => total + item.quantity,
          0
        ); // Cập nhật tổng số lượng
        state.count = action.payload.length; // Cập nhật số lượng wishlist
      })
      .addCase(fetchWishlists.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

// Chọn các trường từ state
export const selectWishlistItems = (state: { wishlist: WishlistState }) =>
  state.wishlist.items;
export const selectTotalItems = (state: { wishlist: WishlistState }) =>
  state.wishlist.totalItems;
export const selectWishlistCount = (state: { wishlist: WishlistState }) =>
  state.wishlist.count; // Selector cho số lượng wishlist

export default wishlistSlice.reducer;
