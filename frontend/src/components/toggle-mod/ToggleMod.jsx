import { useMantineColorScheme, ActionIcon } from "#mc";
import { IconSun, IconMoon } from "#ti";
export default function () {
    const { toggleColorScheme, colorScheme } = useMantineColorScheme();
    return (
        <ActionIcon
            onClick={() => toggleColorScheme()}
            variant="default"
            size="md"
            aria-label="Toggle color scheme"
        >
            {colorScheme == "dark" ? <IconSun /> : <IconMoon />}
        </ActionIcon>
    );
}
