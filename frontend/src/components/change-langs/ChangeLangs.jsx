import { Button, Menu, ActionIcon, useDirection } from "#mc";
import { useTranslation } from "#ri18n";
import { IconLanguage } from "#ti";
export default function ({ toggle }) {
    let { i18n } = useTranslation();
    let { setDirection } = useDirection();
    return (
        <Menu>
            <Menu.Target>
                <ActionIcon variant="default">
                    <IconLanguage />
                </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item
                    onClick={() => {
                        setDirection("rtl");
                        i18n.changeLanguage("ar");
                        toggle()
                    }}
                >
                    العربية
                </Menu.Item>
                <Menu.Item
                    onClick={() => {
                        setDirection("ltr");
                        i18n.changeLanguage("en");
                        toggle()
                    }}
                >
                    English
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}
