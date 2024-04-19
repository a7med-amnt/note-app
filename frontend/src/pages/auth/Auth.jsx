import { Link } from "#rrd";
import { Container, Center, Anchor, Text } from "#mc";
import { useTranslation } from "#ri18n";

export default function () {
    const { t } = useTranslation();
    return (
        <Container mt={100}>
            <Center ta="center">
                <Text size="xl">
                    <Anchor component={Link} to="signin">
                        {t("signin")}
                    </Anchor>
                    <br />
                    {t("or")}
                    <br />
                    <Anchor component={Link} to="signin">
                        {t("signup")}
                    </Anchor>
                </Text>
            </Center>
        </Container>
    );
}
