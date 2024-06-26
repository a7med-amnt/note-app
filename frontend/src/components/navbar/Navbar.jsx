import { AppShell, Stack, Divider, Box } from "#mc";
import { useTranslation } from "#ri18n";
import Navitems from "#components/navitems/Navitems";

export default function ({ toggle }) {
    const { Navbar } = AppShell;
    let { t } = useTranslation();

    return (
        <Navbar>
            <Stack p="md">
                <Navitems toggle={toggle} />
            </Stack>
        </Navbar>
    );
}
