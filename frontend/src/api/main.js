import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryConfig } from "#configs/api.js";

export default   createApi({
    baseQuery: fetchBaseQuery(fetchBaseQueryConfig),
    tagTypes: ["notes"],
    endpoints: () => ({})
});
