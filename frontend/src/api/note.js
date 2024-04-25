import api from "#api/main.js";

export const noteApi = api.injectEndpoints({
    endpoints: b => ({
        getAllNotes: b.query({
            query: () => "/notes",
            providesTags: ["notes"]
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
                url: "/notes/" + notesId,
                method: "put",
                body: data
            })
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
                url: "/notes/" + notesId,
                method: "put"
            })
        })
    })
});

export const {
    useGetAllNotesQuery,
    useAddNoteMutation,
    useEditNoteMutation,
    useDeleteNoteMutation,
    useTogglePinMutation
} = noteApi;
