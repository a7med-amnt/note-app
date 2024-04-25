const apiv1Url = import.meta.env.E_APIV1;

export const fetchBaseQueryConfig = {
    baseUrl: apiv1Url,
    prepareHeaders: (headers  ) => {
        const token = localStorage.getItem("token");

        if (token) {
            headers.set("authorization",  token);
        }

        return headers;
    }
};
