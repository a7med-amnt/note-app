import { Group } from "#mc";
import ToggleMod from "#components/toggle-mod/ToggleMod";
import ChangeLangs from "#components/change-langs/ChangeLangs";
export default function () {
    return (
        <>
            <Group>
                <ToggleMod />
                <ChangeLangs />
            </Group>
        </>
    );
}
