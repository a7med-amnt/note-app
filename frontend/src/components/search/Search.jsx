import { useRef, useEffect } from "#r";
import { useDisclosure } from "#mh";
import {
    TextInput,
    Group,
    Checkbox,
    Button,
    ActionIcon,
    Stack,
    Paper,
    Title,
    Menu,
    Box
} from "#mc";
import { useForm } from "#mf";
import { IconSearch, IconX, IconFilter } from "#ti";
import { useSelector, useDispatch } from "#rr";
import { useTranslation } from "#ri18n";
import { setSearch, searchSelector } from "#slices/search";
import { useGetNotesQuery } from "#api/note";

export default function () {
    let search;
    const { t } = useTranslation();

    const searchState = useSelector(searchSelector);
    let dis = useDispatch();
    let form = useForm({
        mode: "uncontrolled",
        initialValues: {
            search: ""
        }
    });

    let { data, isSuccess } = useGetNotesQuery(searchState);

    function handleSearch() {
        dis(setSearch(form.getValues().search));
    }
    let icon = (
        <ActionIcon
            onClick={() => {
                dis(setSearch(""));
                form.reset();
            }}
        >
            <IconX size="16" />
        </ActionIcon>
    );
    return (
        <Group pos="relative">
            <ActionIcon onClick={handleSearch}>
                <IconSearch size={20} />
            </ActionIcon>
            <TextInput
                w={150}
                radius={10}
                leftSection={icon}
                placeholder={t("search")}
                {...form.getInputProps("search")}
            />
        </Group>
    );
}
