import { Modal, Stack, TextInput, Textarea } from "#mc";
import { useTranslation } from "#ri18n";
import TagsInput from "#components/tags-input/TagsInput"

export default function ({ opened, close }) {
    const { t } = useTranslation();
    const { Content, Body } = Modal;
    return (
        <Modal opened={opened} onClose={close} title={t("addNote")}>
            <Stack>
                <TextInput
                    label={t("title")}
                    placeholder={t("titlePlaceholder")}
                />
                <Textarea
                    label={t("content")}
                    placeholder={t("contentPlaceholder")}
                />
                <TagsInput />
            </Stack>
        </Modal>
    );
}
