import { useTranslation } from "#ri18n";
export default function () {
    const { t } = useTranslation();
    return <>Home {t("note")}</>;
}
