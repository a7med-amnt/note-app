import {
    Stack,
    Modal,
    Anchor,
    Group,
    Divider,
    Paper,
    ActionIcon,
    Text,
    Flex,
    Button
} from "#mc";
import { useDisclosure } from "#mh";
import { useTranslation } from "#ri18n";
import { IconTrash, IconEdit, IconPin } from "#ti";
import Tags from "#components/tags/Tags";
import { useDeleteNoteMutation, useTogglePinMutation } from "#api/note";
import checkRes from "#utils/checkRes";
import { Link } from "#rrd";
export default function ({ note }) {
    let { title, content, pin, tags, _id } = note;
    const [deleteNote] = useDeleteNoteMutation();
    const [togglePin] = useTogglePinMutation();
    let [opened, { open, close }] = useDisclosure(false);
    let { t } = useTranslation();

    function handleDeleteNote() {
        checkRes(deleteNote, _id);
        close()
    }

    function handleTogglePin() {
        checkRes(togglePin, _id);
    }

    return (
        <Paper
            withBorder
            p="md"
            m="md"
            bg="mbg"
            shadow="sm"
            style={{ flexBasis: 300, flexGrow: 1 }}
        >
            <Stack>
                <Group justify="space-between">
                    <Stack>
                        <Text fw={700} pb={2}>
                            {title}
                        </Text>
                    </Stack>
                    <ActionIcon
                        c={pin ? "primary" : ""}
                        onClick={handleTogglePin}
                    >
                        <IconPin />
                    </ActionIcon>
                </Group>
                <Divider />
                <Text py={5}>{content}</Text>
                <Flex
                    direction={{ base: "column", md: "row" }}
                    justify={{ base: "flex-start", md: "space-between" }}
                >
                    <Group wrap="wrap">
                        <Tags tags={tags} />
                    </Group>
                    <Group justify="flex-end">
                        <Anchor component={Link} to={"/edit-note/" + _id}>
                            <ActionIcon>
                                <IconEdit />
                            </ActionIcon>
                        </Anchor>
                        <ActionIcon onClick={open}>
                            <IconTrash />
                        </ActionIcon>
                    </Group>
                </Flex>
            </Stack>
            <Modal title={t("delete")} onClose={close} centered opened={opened}>
                <Text my="lg">{t("confDelT")}</Text>
                <Group>
                    <Button variant="default" onClick={close}>
                        {t("no")}
                    </Button>
                    <Button onClick={handleDeleteNote} color="darkred">
                        {t("yes")}
                    </Button>
                </Group>
            </Modal>
        </Paper>
    );
}
