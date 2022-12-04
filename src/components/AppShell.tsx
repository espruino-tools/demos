import { Breadcrumbs, Center, Container, Footer, Text, Header, Title } from "@mantine/core";
import { FaRegCopyright } from "react-icons/fa";

interface AppShellProps{
    children: React.ReactNode;
    items:any;
}

export const AppShell = ({children,items}:AppShellProps) => {      

    return (
        <>
        <div style={{minHeight:"calc(100vh - 50px)"}}>
            
            <Header style={{backgroundColor:"white",display:'flex',alignItems:'center', gap: 30}} height={75} p="xs">
                <Title pl="sm" order={2}>Espruino Demos</Title> 
                {window.location.origin + '/' !== window.location.href &&
                <div className="breadcrumb-container">
                    <Breadcrumbs>{items}</Breadcrumbs>  
                </div>}
            </Header>
            {window.location.origin + '/' !== window.location.href &&
            <Container pt="lg" className="breadcrumb-mobile">
                <Breadcrumbs>{items}</Breadcrumbs>
            </Container>
}
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