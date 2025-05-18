import { useTranslation } from "react-i18next";
export default function NoTask() {
    const { t } = useTranslation();
    return (
        <div>
            <h2 style={{ textAlign: "center", marginTop: "100px" }}>{t("noTask")}</h2>
        </div>
    );
}