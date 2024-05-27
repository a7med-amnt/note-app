import {
    Button,
    ActionIcon,
    Stack,
    Badge,
    Group,
    TextInput,
    Textarea
} from "#mc";
import { useTranslation } from "#ri18n";
import { useEditNoteMutation, useGetNoteQuery } from "#api/note";
import { useParams } from "#rrd";
import { useForm } from "#mf";
import checkRes from "#utils/checkRes";
import TagsInput from "#components/tags-input/TagsInput";

export default function () {
    let noteId = useParams().noteId;
    let note = {};
    const { t } = useTranslation();
    const [editNote] = useEditNoteMutation();
    const { data, isSuccess } = useGetNoteQuery(noteId);
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            title: "",
            content: "",
            tags: []
        },
        validate: {
            title: v => (v ? null : "Title required"),
            content: v => (v ? null : "Content required")
        }
    });
    if (isSuccess) {
        note = data.note;
        form.initialize({
            title: note.title,
            content: note.content,
            tags: note.tags
        });
    }
    function handleEditNote() {
        function validData(data) {
            checkRes(editNote, { data, noteId }, () => {}, console.log);
        }
        form.onSubmit(validData)();
    }

    return (
        <Stack m="md">
            <TextInput
                label={t("title")}
                placeholder={t("titlePlaceholder")}
                {...form.getInputProps("title")}
            />
            <Textarea
                label={t("content")}
                placeholder={t("contentPlaceholder")}
                {...form.getInputProps("content")}
            />

            <TagsInput form={form} />
            <Button onClick={handleEditNote}>Edit</Button>
        </Stack>
    );
}
