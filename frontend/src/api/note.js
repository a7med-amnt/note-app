import api from "#api/main.js";

export const noteApi = api.injectEndpoints({
    endpoints: b => ({
        getNotes: b.query({
            query: params => "/notes?" + params,
            providesTags: ["notes"]
        }),
        getNote: b.query({
            query: id => "/notes/" + id,
            providesTags: ["note"]
        }),
        addNote: b.mutation({
            query: body => ({
                url: "/notes",
                method: "post",
                body
            }),
            invalidatesTags: ["notes"]
        }),
        editNote: b.mutation({
            query: ({ data, noteId }) => ({
                url: "/notes/" + noteId,
                method: "put",
                body: data
            }),
            invalidatesTags: ["notes", "note"]
        }),
        deleteNote: b.mutation({
            query: noteId => ({
                url: "/notes/" + noteId,
                method: "delete"
            }),
            invalidatesTags: ["notes"]
        }),
        togglePin: b.mutation({
            query: noteId => ({
                url: "/notes/pin/" + noteId,
                method: "put"
            }),
            invalidatesTags: ["notes", "note"]
        })
    })
});

export const {
    useGetNotesQuery,
    useGetNoteQuery,
    useAddNoteMutation,
    useEditNoteMutation,
    useDeleteNoteMutation,
    useTogglePinMutation
} = noteApi;
