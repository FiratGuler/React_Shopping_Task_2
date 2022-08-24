import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios"




type productState = {
    items: ProductType[],
    loading: boolean,
    error: string,
    activeFilter: string,
    cartArr: ProductType[],
    cartTotal: number,
    show: boolean
}
const initialState: productState = {
    items: [],
    loading: false,
    error: "",
    activeFilter: 'all',
    cartArr: [],
    cartTotal: 0,
    show: false

}
export const getProductAsync = createAsyncThunk('getProductAsync', () => {
    return axios
        .get('https://fakestoreapi.com/products')
        .then(response => response.data)
})
// export const getProductAsync = createAsyncThunk("getProductAsync", async () => {
//     const response = await axios.get<ProductType>('https://fakestoreapi.com/products');
//     return response.data;
// })

export const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        changeActiveFilter: (state, action) => {
            state.activeFilter = action.payload
        },
        AddCartArr: (state, action) => {
            state.cartArr.push(action.payload)
            state.cartTotal += action.payload.price
            state.show=true
        },
        ShowHide: (state,action) => {
            state.show = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProductAsync.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(getProductAsync.fulfilled, (state, action: PayloadAction<ProductType[]>) => {

            state.items = action.payload
            state.loading = false;
        });
        builder.addCase(getProductAsync.rejected, (state, action) => {
            state.loading = false;
            state.items = []
            state.error = "ERROR FETCHING PRODUCT DATA"
        })
    }

})



export const { changeActiveFilter, AddCartArr,ShowHide } = productSlice.actions;
export default productSlice.reducer;

export interface Rating {
    rate: number;
    count: number;
}


export interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;

}