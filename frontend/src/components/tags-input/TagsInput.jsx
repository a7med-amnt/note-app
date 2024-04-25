import { Group, Box, ActionIcon, TextInput } from "#mc";
import { IconPlus } from "#ti";
import { useState } from "#r";
import { useTranslation } from "#ri18n";
import Tags from "#components/tags/Tags";

export default function ({ setValues }) {
    let [tags, setTags] = useState([]);
    let [value, setValue] = useState("");
    const { t } = useTranslation();
    function handleClick() {
        if (!value.trim()) return console.log("no tag");
        setTags([...tags, value]);
        setValues({ tags: [...tags, value] });
    }

    return (
        <Box>
            <Group>
                <Tags tags={tags} />
            </Group>
            <Group>
                <TextInput
                    placeholder={t("tagPlaceholder")}
                    label={t("tag")}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <ActionIcon onClick={handleClick}>
                    <IconPlus />
                </ActionIcon>
            </Group>
        </Box>
    );
}
