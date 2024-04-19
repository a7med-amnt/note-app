import Router from "#routes/Router";
import { createTheme, MantineProvider,DirectionProvider } from "#mc";
import "@mantine/core/styles.css";
import "#i18n/i18n";
import "#styles/main.css";

export default function () {
    const theme = createTheme({
        fontFamily: "Poppins, sans-serif",
        primaryColor: "cyan"
    });
    return (
      <DirectionProvider>
        <MantineProvider theme={theme}>
            <Router />
        </MantineProvider>
      </DirectionProvider>
    );
}
