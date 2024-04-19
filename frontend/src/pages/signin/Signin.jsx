import {
    Container,
    Stack,
    TextInput,
    PasswordInput,
    Button,
    Title,
    Text,
    Anchor
} from "#mc";
import { Link } from "#rrd";
import { useTranslation } from "#ri18n";
export default function () {
    const { t } = useTranslation();
    return (
        <Container w={{base: "100%",md: 500}} mt={60}>
            <Stack>
                <Title order={2}>{t("signin")}</Title>
                <TextInput
                    label={t("emailLabel")}
                    placeholder={t("emailPlaceholder")}
                />
                <PasswordInput
                    label={t("passwordLabel")}
                    placeholder={t("passwordPlaceholder")}
                />
                <Button fullWidth>{t("signin")}</Button>
                <Text size="sm">
                    {t("dontHavAccount")}{" "}
                    <Anchor component={Link} to="/auth/signup">
                        {t("signup")}
                    </Anchor>
                </Text>
            </Stack>
        </Container>
    );
}
