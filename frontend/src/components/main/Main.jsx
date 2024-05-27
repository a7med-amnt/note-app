import { AppShell } from "#mc";

export default function ({ content }) {
    const { Main } = AppShell;
    return <Main >{content}</Main>;
}
