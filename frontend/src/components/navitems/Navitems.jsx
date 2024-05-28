import { Group, Button, Modal, Text } from "#mc";
import ToggleMod from "#components/toggle-mod/ToggleMod";
import ChangeLangs from "#components/change-langs/ChangeLangs";
import { deleteToken } from "#utils/token";
import { useDisclosure } from "#mh";
import { useTranslation } from "#ri18n";
import { useNavigate } from "#rrd";

export default function ({ toggle }) {
    let [opened, { open, close }] = useDisclosure(false);
    let { t } = useTranslation();
    let nav = useNavigate();

    function handleSignout() {
        deleteToken();
        nav("auth",{replace:true});
    }

    return (
        <>
            <Button onClick={open}>{t("signout")}</Button>

            <Group>
                <ToggleMod />
                <ChangeLangs toggle={toggle} />
            </Group>
            <Modal
                title={t("signout")}
                onClose={close}
                centered
                opened={opened}
            >
                <Text my="lg">{t("confSignoutT")}</Text>
                <Group>
                    <Button variant="default" onClick={close}>
                        {t("no")}
                    </Button>
                    <Button onClick={handleSignout} color="darkred">
                        {t("yes")}
                    </Button>
                </Group>
            </Modal>
        </>
    );
}
