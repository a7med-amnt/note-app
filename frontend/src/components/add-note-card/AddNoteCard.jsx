import { Modal, Stack, TextInput, Textarea, Button } from "#mc";
import { useTranslation } from "#ri18n";
import TagsInput from "#components/tags-input/TagsInput";
import { useAddNoteMutation } from "#api/note";
import { useForm } from "#mf";
import checkRes from "#utils/checkRes";

export default function ({ opened, close }) {
    const { t } = useTranslation();
    const { Content } = Modal;
    const [addNote] = useAddNoteMutation();
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            title: "",
            content: "",
            tags: []
        },
        validate: {
            title: v => (v ? null : "Name required"),
            content: v => (v ? null : "Email required")
        }
    });
    function handleSubmit() {
        function cbS(data) {
            console.log(data);
        }
        function validData(data) {
            checkRes(addNote, data, cbS);
        }
        form.onSubmit(validData)();
    }
    return (
        <Modal opened={opened} onClose={close} title={t("addNote")}>
            <Stack>
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
                <TagsInput setValues={form.setValues} />
                <Button onClick={handleSubmit}>Add</Button>
            </Stack>
        </Modal>
    );
}
