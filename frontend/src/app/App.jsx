import Router from "#routes/Router";
import {
    createTheme,
    ActionIcon,
    MantineProvider,
    DirectionProvider
} from "#mc";
import "@mantine/core/styles.css";
import "#i18n/i18n";
import { useTranslation } from "#ri18n";
import { useDirection } from "#mc";
import "#styles/main.css";

export default function () {
    const { i18n } = useTranslation();
    const lang = i18n.language;
    let dir = lang == "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    const theme = createTheme({
        fontFamily: "Poppins, sans-serif",
        primaryColor: "cyan",
        components: {
            ActionIcon: ActionIcon.extend({
                defaultProps: {
                    variant: "default",
                    bg: "transparent",
                    style: { border: "0" }
                }
            })
        }
    });

    return (
        <DirectionProvider>
            <MantineProvider theme={theme}>
                <Router />
            </MantineProvider>
        </DirectionProvider>
    );
}
