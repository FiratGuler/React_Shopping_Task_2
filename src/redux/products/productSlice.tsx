import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios"




type productState = {
    items: ProductType[],
    loading: boolean,
    error: string,
    activeFilter: string,
    cartArr: ProductType[],
    cartStateTotalPrice: number,
    cartTotalPrice: number
    cartTotalProducts: number
    show: boolean,


}
const initialState: productState = {
    items: [],
    loading: false,
    error: "",
    activeFilter: 'all',
    cartArr: [],
    cartStateTotalPrice: 0,
    cartTotalPrice: 0,
    cartTotalProducts: 0,
    show: false,



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
            state.cartStateTotalPrice += action.payload.price
            state.cartTotalPrice += action.payload.price
            state.show = true
            state.cartTotalProducts += 1
        },
        ShowHide: (state, action) => {
            state.show = action.payload
        },
        DeleteCartProduct: (state, action) => {
            const filtered = state.cartArr.filter((item) => item.id !== action.payload)
            state.cartArr.map((cart) => cart.id === action.payload ? state.cartTotalPrice -= (cart.quantity) * (cart.price) : '')
            state.cartArr = filtered
        },
        QuantityIncrease: (state, action) => {
            state.cartArr.map((cart) => cart.id === action.payload ? cart.quantity += 1 : '')
            state.cartArr.map((cart) => cart.id === action.payload ? state.cartTotalPrice += cart.price : '')

            state.cartTotalProducts += 1
        },
        QuantityDecrease: (state, action) => {
            state.cartArr.map((cart) => cart.id === action.payload ? cart.quantity -= 1 : '')
            state.cartTotalProducts -= 1
            if (state.cartTotalPrice !== 0) {
                state.cartArr.map((cart) => cart.id === action.payload ? state.cartTotalPrice -= cart.price : '')
            }

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
            state.error = "SAYFAYI YENİLEYİNİZ!"
        })
    }

})



export const { changeActiveFilter, AddCartArr, ShowHide, QuantityIncrease, QuantityDecrease, DeleteCartProduct } = productSlice.actions;
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
    quantity: number;
}