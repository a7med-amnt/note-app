import { configureStore } from "#rtk";
import api from "#api/main";
import search from "#slices/search";

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
         search
    },
    middleware: gtm => gtm().concat(api.middleware)
});

export default store;
