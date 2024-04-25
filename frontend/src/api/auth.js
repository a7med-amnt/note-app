import api from "#api/main.js";

export const authApi = api.injectEndpoints({
    endpoints: b => ({
        signup: b.mutation({
            query: body => ({ url: "/auth/signup", body, method: "post" }),
        }),
        signin: b.mutation({
            query: body => ({ url: "/auth/signin", body, method: "post" })
        })
    })
});

export const { useSignupMutation, useSigninMutation } = authApi;
