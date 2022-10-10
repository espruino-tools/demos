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
            <Header style={{backgroundColor:"white",display:'flex',alignItems:'center', gap: 30}} height={75} p="xs">
                <Title pl="sm" order={2}>Espruino Demos</Title> 
                <Breadcrumbs>{items}</Breadcrumbs>  
            </Header>

            {children}
        </>
    )
}