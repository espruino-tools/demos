import { Anchor, Breadcrumbs, Container, Divider } from "@mantine/core";

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
        <Container pt="xl">
            <Breadcrumbs>{items}</Breadcrumbs>
            <br/>
            <Divider variant="dashed"></Divider>
            <br/>
            {children}
        </Container>
    )
}