import Router from "#routes/Router";
import {
    createTheme,
    ActionIcon,
    MantineProvider,
    DirectionProvider,
    virtualColor,
    colorsTuple
} from "#mc";
import { useTranslation } from "#ri18n";
import { useDirection } from "#mc";
import { Provider } from "#rr";
import store from "#store/store";
import { Notifications } from "#mn";
import "@mantine/core/styles.css";
import "#i18n/i18n";
import "#styles/main.css";
import "@mantine/notifications/styles.css";

export default function () {
    const { i18n } = useTranslation();
    const lang = i18n.language;
    let dir = lang == "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    const theme = createTheme({
        fontFamily: "Poppins, sans-serif",
        primaryColor: "primary",
        colors: {
            primary: colorsTuple("darkred"),
            mbg: virtualColor({
                name: "mbg",
                dark: "dark.6",
                light: "gray.1"
            }),
            "dark.6": colorsTuple("#2E2E2E"),
            "gray.1": colorsTuple("#F8F9FA")
        },
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
        <Provider store={store}>
            <DirectionProvider>
                <MantineProvider theme={theme}>
                    <Notifications position="top-center" limit={1} />
                    <Router />
                </MantineProvider>
            </DirectionProvider>
        </Provider>
    );
}
