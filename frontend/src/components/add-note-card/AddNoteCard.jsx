import {
    Modal,
    Stack,
    ActionIcon,
    Badge,
    TextInput,
    Textarea,
    Button
} from "#mc";
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
            title: v => (v ? null : "Title required"),
            content: v => (v ? null : "Content required")
        }
    });
    function handleSubmit() {
        function validData(data) {
            checkRes(addNote, data);
        form.reset();
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
                <TagsInput form={form} />
                <Button my="lg" onClick={handleSubmit}>{t("add")}</Button>
            </Stack>
        </Modal>
    );
}
