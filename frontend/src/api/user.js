import api from "#api/main.js";

export const userApi = api.injectEndpoints({
    endpoints: b => ({
        getUser: b.query({
            query: body => "/user"
        })
    })
});
export default userApi;
export const { useGetUserQuery } = userApi;
