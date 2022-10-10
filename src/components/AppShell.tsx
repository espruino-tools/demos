import { Anchor, Breadcrumbs, Center, Container, Divider, Footer, Text, Header, Title } from "@mantine/core";
import { FaCopyright, FaRegCopyright } from "react-icons/fa";

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
        <div style={{minHeight:"calc(100vh - 50px)"}}>
            <Header style={{backgroundColor:"white",display:'flex',alignItems:'center', gap: 30}} height={75} p="xs">
                <Title pl="sm" order={2}>Espruino Demos</Title> 
                <Breadcrumbs>{items}</Breadcrumbs>  
            </Header>

            {children}
            </div>
            <Footer height={50} style={{background:'#2b3137'}}>
                <Center style={{lineHeight:50, height:"100%"}}>
                <FaRegCopyright color="white"/> <Text pl="sm" color={'white'}>Callum Mcluskey 2022</Text>
                </Center>
            </Footer>
        </>
    )
}