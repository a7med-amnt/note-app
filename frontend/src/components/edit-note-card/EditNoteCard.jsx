import { Modal, Stack, TextInput, Textarea } from "#mc";
import { useTranslation } from "#ri18n";

export default function ({ opened, close }) {
    const { t } = useTranslation();
    const { Content, Body } = Modal;
    return (
        <Modal opened={opened} onClose={close} title={t("editNote")}>
            <Stack>
                <TextInput
                    label={t("title")}
                    placeholder={t("titlePlaceholder")}
                />
                <Textarea
                    label={t("content")}
                    placeholder={t("contentPlaceholder")}
                />
            </Stack>
        </Modal>
    );
}
