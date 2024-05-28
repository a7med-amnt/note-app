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
import { useEffect } from "#r";
import { Link, useNavigate } from "#rrd";
import { useTranslation } from "#ri18n";
import { useSigninMutation } from "#api/auth";
import checkRes from "#utils/checkRes";

export default function () {
    const { t } = useTranslation();
    const nav = useNavigate();
    const [signin] = useSigninMutation();
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            email: "",
            password: ""
        },
        validate: {
            email: v => (v ? null : "Email required"),
            password: v => (v ? null : "Password required")
        }
    });
    function handleSubmit() {
        function cbS(data) {
            localStorage.setItem("token", data.token);
            nav("/", { replace: true });
            //window.history;
        }
        function validData(data) {
            checkRes(signin, data, cbS);
        }
        form.onSubmit(validData)();
    }

    return (
        <Container w={{ base: "100%", md: 500 }} mt={60}>
            <Stack>
                <Title order={2}>{t("signin")}</Title>
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
                    {t("signin")}
                </Button>
                <Text size="sm">
                    {t("dontHavAccount")}{" "}
                    <Anchor component={Link} to="/auth/signup" replace={true}>
                        {t("signup")}
                    </Anchor>
                </Text>
            </Stack>
        </Container>
    );
}
