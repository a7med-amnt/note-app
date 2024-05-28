import { Link } from "#rrd";
import { Container, Center, Anchor, Text } from "#mc";
import { useTranslation } from "#ri18n";

export default function () {
    const { t } = useTranslation();
    return (
        <Container h="calc(100vh - 80px)">
            <Center h="100%" ta="center">
                <Text size="xl">
                    <Anchor component={Link} to="signin" replace={true}>
                        {t("signin")}
                    </Anchor>
                    <br />
                    {t("or")}
                    <br />
                    <Anchor component={Link} to="signup" replace={true}>
                        {t("signup")}
                    </Anchor>
                </Text>
            </Center>
        </Container>
    );
}
