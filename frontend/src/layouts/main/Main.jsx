import { Outlet } from "#rrd";
import { AppShell } from "#mc";
import { useDisclosure } from "#mh";
import Main from "#components/main/Main";
import Header from "#components/header/Header";
import Navbar from "#components/navbar/Navbar";
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
            <Header opened={opened} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Main content={<Outlet />} />
        </AppShell>
    );
}
