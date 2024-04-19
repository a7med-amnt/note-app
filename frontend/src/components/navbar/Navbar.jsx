import { AppShell, Stack, Divider, Box } from "#mc";
import { useTranslation } from "#ri18n";
import Navitems from "#components/navitems/Navitems";

export default function ({ toggle }) {
    const { Navbar } = AppShell;
    let { t } = useTranslation();

    return (
        <Navbar>
            <Box px="md">
                <h3>{t("navbar")}</h3>
            </Box>
            <Divider />
            <Stack p="md">
                <Navitems toggle={toggle} />
            </Stack>
        </Navbar>
    );
}
