import NoteCard from "#components/note-card/NoteCard";
import { useGetNotesQuery } from "#api/note";
import { useSelector } from "#rr";
import { searchSelector } from "#slices/search";
import NotesSkeleton from "#components/skeletons/Notes";

export default function () {
    let searchState = useSelector(searchSelector);
    let { data, isLoading } = useGetNotesQuery(searchState);
    let notes = [];
    if (data) notes = data.notes;
    let NotesCards = notes.map((note, i) => <NoteCard key={i} note={note} />);

    return isLoading ? <NotesSkeleton /> : NotesCards;
}
