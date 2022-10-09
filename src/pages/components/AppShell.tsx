import { Container } from "@mantine/core";

interface AppShellProps{
    children: React.ReactNode;
}

export const AppShell = ({children}:AppShellProps) => {
    return (
        <Container pt="xl">
        {children}
        </Container>
    )
}