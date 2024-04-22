import { Link } from "#rrd";
import { AppShell, Burger, Avatar, Group, TextInput } from "#mc";
import { useTranslation } from "#ri18n";
import Logo from "#components/logo/Logo";

export default function ({ opened, toggle }) {
    const { Header } = AppShell;
    const { t } = useTranslation();
    return (
        <Header px={5}>
            <Group
                wrap="nowrap"
                h="100%"
                justify="space-between"
                align="center"
            >
                <Group>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="md"
                    />
                    <Logo />
                </Group>
                <TextInput w={150} radius={10} placeholder={t("search")} />
                <Link to="/profile">
                    <Avatar alt="A" />
                </Link>
            </Group>
        </Header>
    );
}
