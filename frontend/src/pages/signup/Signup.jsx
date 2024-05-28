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
import { useForm } from "#mf";
import { notifications } from "#mn";
import { Link, useNavigate } from "#rrd";
import { useTranslation } from "#ri18n";
import { useSignupMutation } from "#api/auth";
import checkRes from "#utils/checkRes";

export default function () {
    const [signup] = useSignupMutation();
    const { t } = useTranslation();
    const nav = useNavigate();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        validate: {
            name: v => (v ? null : "Name required"),
            email: v => (v ? null : "Email required"),
            password: v => (v ? null : "Password required")
        }
    });
    function handleSubmit() {
        function cbS() {
            nav("/auth/signin", { replace: true });
        }
        function validData(data) {
            checkRes(signup, data, cbS);
        }
        form.onSubmit(validData)();
    }

    return (
        <Container w={{ base: "100%", md: 500 }} mt={60}>
            <Stack>
                <Title order={2}>{t("signup")}</Title>
                <TextInput
                    label={t("nameLabel")}
                    placeholder={t("namePlaceholder")}
                    {...form.getInputProps("name")}
                />
                <TextInput
                    label={t("emailLabel")}
                    placeholder={t("emailPlaceholder")}
                    {...form.getInputProps("email")}
                />
                <PasswordInput
                    label={t("passwordLabel")}
                    placeholder={t("passwordPlaceholder")}
                    {...form.getInputProps("password")}
                />
                <Button onClick={handleSubmit} fullWidth>
                    {t("signup")}
                </Button>
                <Text size="sm">
                    {t("havAccount")}{" "}
                    <Anchor component={Link} to="/auth/signin" replace={true}>
                        {t("signin")}
                    </Anchor>
                </Text>
            </Stack>
        </Container>
    );
}
