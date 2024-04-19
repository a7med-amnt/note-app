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
        <Container w={{ base: "100%", md: 500 }} mt={60}>
            <Stack>
                <Title order={2}>{t("signup")}</Title>
                <TextInput
                    label={t("nameLabel")}
                    placeholder={t("namePlaceholder")}
                />
                <TextInput
                    label={t("emailLabel")}
                    placeholder={t("emailPlaceholder")}
                />
                <PasswordInput
                    label={t("passwordLabel")}
                    placeholder={t("passwordPlaceholder")}
                />
                <Button fullWidth>{t("signup")}</Button>
                <Text size="sm">
                    {t("havAccount")}{" "}
                    <Anchor component={Link} to="/auth/signin">
                        {t("signin")}
                    </Anchor>
                </Text>
            </Stack>
        </Container>
    );
}
