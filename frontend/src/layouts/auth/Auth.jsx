import { Outlet } from "#rrd";
import { AppShell } from "#mc";
import { useDisclosure } from "#mh";
import Main from "#components/main/Main";
import AuthHeader from "#components/header/AuthHeader";
import AuthNavbar from "#components/navbar/AuthNavbar";
import Footer from "#components/footer/Footer";

export default function () {
    const [opened, { toggle }] = useDisclosure();
    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: "sm",
                collapsed: { mobile: !opened }
            }}
            padding={5}
        >
            <Main content={<Outlet />} />
            <AuthHeader toggle={toggle} opened={opened} />
            <AuthNavbar toggle={toggle} />
        </AppShell>
    );
}
