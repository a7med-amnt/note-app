import NoteCard from "#components/note-card/NoteCard";
import { useGetAllNotesQuery } from "#api/note";

export default function ({ openEditCard }) {
    let { data, error } = useGetAllNotesQuery();

    let notes = [];
    if (data) notes = data.notes;
    let notesCards = notes.map((note, i) => (
        <NoteCard key={i} note={note} openEditCard={openEditCard} />
    ));
    return notesCards;
}
