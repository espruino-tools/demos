import { Anchor, Breadcrumbs, Container, Divider, Footer, Group, Header, Title } from "@mantine/core";

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
        <div style={{minHeight:"calc(100vh - 270px)"}}>
            <Header style={{backgroundColor:"white",display:'flex',alignItems:'center', gap: 30}} height={75} p="xs">
                <Title pl="sm" order={2}>Espruino Demos</Title> 
                <Breadcrumbs>{items}</Breadcrumbs>  
            </Header>

            {children}
            </div>
            <Footer height={270} style={{background:'#2b3137'}}>

            </Footer>
        </>
    )
}