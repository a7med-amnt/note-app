import { useState } from "#r";
import { Group } from "#mc";
import { useDisclosure } from "#mh";
import NotesCards from "#components/notes-cards/NotesCards";
import AddNoteButton from "#components/add-note-button/AddNoteButton";
import AddNoteCard from "#components/add-note-card/AddNoteCard";

export default function () {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <Group justify="center">
            <NotesCards />
            <AddNoteCard opened={opened} close={close} />

            <AddNoteButton open={open} hidden={opened} />
        </Group>
    );
}
