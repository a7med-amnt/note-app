import { Stack, Group, ActionIcon, Text, Flex } from "#mc";
import { IconTrash, IconEdit, IconPin } from "#ti";
import Tags from "#components/tags/Tags";
export default function ({ openEditCard }) {
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
                        Note Title
                    </Text>
                    <Text c="dimmed">2024-4-21</Text>
                </Stack>
                <ActionIcon c="cyan">
                    <IconPin />
                </ActionIcon>
            </Group>
            <Text py={5}>Note content</Text>
            <Flex
                direction={{ base: "column", md: "row" }}
                jsutify={{ base: "flex-start", md: "space-between" }}
            >
                <Group wrap="wrap">
                    <Tags />
                </Group>
                <Group justify="flex-end">
                    <ActionIcon onClick={openEditCard}>
                        <IconEdit />
                    </ActionIcon>
                    <ActionIcon>
                        <IconTrash />
                    </ActionIcon>
                </Group>
            </Flex>
        </Stack>
    );
}
