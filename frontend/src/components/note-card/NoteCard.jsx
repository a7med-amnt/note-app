import { Stack, Group, ActionIcon, Text, Flex } from "#mc";
import { IconTrash, IconEdit, IconPin } from "#ti";
import Tags from "#components/tags/Tags";
import { useDeleteNoteMutation } from "#api/note";
import checkRes from "#utils/checkRes";
export default function ({ note, openEditCard }) {
    let { title, content, isPined, tags, _id } = note;
    const [deleteNote] = useDeleteNoteMutation();
    function handleDeleteNote() {
        checkRes(deleteNote, _id);
    }
    return (
        <Stack
            bg="gray.2"
            style={{
                borderRadius: "10px"
            }}
            p={8}
            w={300}
        >
            <Group justify="space-between">
                <Stack>
                    <Text fw={700} pb={2}>
                        {title}
                    </Text>
                    <Text c="dimmed">2024-4-21</Text>
                </Stack>
                <ActionIcon c="cyan">
                    <IconPin />
                </ActionIcon>
            </Group>
            <Text py={5}>{content}</Text>
            <Flex
                direction={{ base: "column", md: "row" }}
                jsutify={{ base: "flex-start", md: "space-between" }}
            >
                <Group wrap="wrap">
                    <Tags tags={tags} />
                </Group>
                <Group justify="flex-end">
                    <ActionIcon onClick={openEditCard}>
                        <IconEdit />
                    </ActionIcon>
                    <ActionIcon onClick={handleDeleteNote}>
                        <IconTrash />
                    </ActionIcon>
                </Group>
            </Flex>
        </Stack>
    );
}
