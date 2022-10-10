import { Container, Title, Text, Anchor } from "@mantine/core";

export const Home = () => {return(
<>
    <div style={{background:"#F2F2F2", width:"100%"}}>
        <Container p={40}>
        <Title>Espruino Tools - Demonstrations</Title>
        <Text>View a list of demos <Anchor href="demo">here</Anchor></Text>
        </Container>
    </div>
    </>
)}