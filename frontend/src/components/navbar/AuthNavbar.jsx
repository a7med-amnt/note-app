import { AppShell, Stack, Divider, Box } from "#mc";
import { useTranslation } from "#ri18n";
import AuthNavitems from "#components/navitems/AuthNavitems";

export default function ({ toggle }) {
    const { Navbar } = AppShell;
    let { t } = useTranslation();

    return (
        <Navbar>
            
            <Stack p="md">
                <AuthNavitems toggle={toggle} />
            </Stack>
        </Navbar>
    );
}
