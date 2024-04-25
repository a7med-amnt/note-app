import { Group } from "#mc";
import { useDisclosure } from "#mh";
import NotesCards from "#components/notes-cards/NotesCards";
import AddNoteButton from "#components/add-note-button/AddNoteButton";
import AddNoteCard from "#components/add-note-card/AddNoteCard";
import EditNoteCard from "#components/edit-note-card/EditNoteCard";

export default function () {
    const [opened, { open, close }] = useDisclosure(false);
    const [openedEditCard, { open: openEditCard, close: closeEditCard }] =
        useDisclosure(false);
    return (
        <Group>
            <NotesCards openEditCard={openEditCard} />
            <AddNoteCard opened={opened} close={close} />
            <EditNoteCard opened={openedEditCard} close={closeEditCard} />
            <AddNoteButton open={open} hidden={opened} />
        </Group>
    );
}
