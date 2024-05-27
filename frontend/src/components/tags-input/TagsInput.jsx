import { Group, Stack, Badge, ActionIcon, TextInput } from "#mc";
import { IconPlus } from "#ti";
import { useRef } from "#r";
import { IconX } from "#ti";
import { useTranslation } from "#ri18n";
import Tags from "#components/tags/Tags";

export default function ({ form }) {
    let inputRef = useRef();
    const { t } = useTranslation();

    function handleClick() {
        let tag = inputRef.current.value;
        if (!tag.trim()) return console.log("no tag");
        form.insertListItem("tags", tag);
        inputRef.current.value = "";
    }

    let Tags = form.getValues().tags.map((tag, i) => {
        let DeleteHandler = (
            <ActionIcon
                onClick={() => {
                    form.removeListItem("tags", i);
                }}
            >
                <IconX size={15} />
            </ActionIcon>
        );
        return (
            <Badge
                leftSection={DeleteHandler}
                key={tag + "i"}
                m="sm"
                style={{ textTransform: "none" }}
            >
                {tag}
            </Badge>
        );
    });

    return (
        <Stack>
            <Group>{Tags}</Group>
            <TextInput
                placeholder={t("tagPlaceholder")}
                label={t("tag")}
                ref={inputRef}
                rightSection={
                    <ActionIcon onClick={handleClick}>
                        <IconPlus />
                    </ActionIcon>
                }
            />
        </Stack>
    );
}
