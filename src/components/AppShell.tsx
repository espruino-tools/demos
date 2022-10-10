import { Anchor, Breadcrumbs, Container, Divider, Group, Header, Title } from "@mantine/core";

interface AppShellProps{
    children: React.ReactNode;
}

export const AppShell = ({children}:AppShellProps) => {

    const items = [
        { title: 'home', href: '/' },
      ].map((item, index) => (
        <Anchor href={item.href} key={index}>
          {item.title}
        </Anchor>
      ));
      

    return (
        <>
        <Header height={60} p="xs">
            <Group>
                <Title order={2}>Espruino Tools - Demos</Title> 
                <Breadcrumbs>{items}</Breadcrumbs>  
                </Group>
            </Header>
        <Container pt="xl">
            {children}
        </Container>
        </>
    )
}