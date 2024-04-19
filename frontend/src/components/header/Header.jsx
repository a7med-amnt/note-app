import { AppShell, Burger, Group } from "#mc";
import Logo from "#components/logo/Logo";

export default function ({ opened, toggle }) {
    const { Header } = AppShell;
    return (
        <Header px={5}>
            <Group justify="space-between" align="center">
                <Logo />
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="lg"
                />
            </Group>
        </Header>
    );
}
