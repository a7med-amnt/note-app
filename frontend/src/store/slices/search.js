import { createSlice } from "#rtk";

const initialState = {
    entity: ""
};
let search = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearch: (os, a) => {
            os.entity = new URLSearchParams({ search: a.payload }).toString();
        }
    }
});

export function searchSelector(state) {
    return state.search.entity;
}

export default search.reducer;
export const { setSearch } = search.actions;
