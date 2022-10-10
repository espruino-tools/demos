import { Container, Title, Text, Anchor, Center, Button, Image, Card, Group } from "@mantine/core";

export const Home = () => {return(
<>
    <div style={{background:"#F2F2F2", width:"100%"}}>
        <Container p={40}>
            <Center style={{flexDirection:"column"}}>
                <Title style={{fontSize:40}}>Espruino Tools</Title>
                <Text pb="xl" style={{fontSize:25}}>Demonstrations</Text>
                <Anchor href="demo"><Button color="teal">view demos</Button></Anchor>
            </Center>
        </Container>
    </div>
    <Container>
        <Group style={{justifyContent:"space-around"}}>
        <Card style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:300, height:400}}>
        <Image height={150} fit="contain" src="https://svgshare.com/i/nJc.svg"></Image>
        <Text pt="xl" style={{textAlign:"center"}}>This site intends to show just how easy it is to use the device controller package to create meaningful projects.</Text>
        </Card>
        <Card style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:300, height:400}}>
        <Image height={150} fit="contain" src="https://svgshare.com/i/nHx.svg"></Image>
        <Text pt="xl" style={{textAlign:"center"}}>View video Demonstrations and the code required to produce the demonstrations.</Text>

        </Card>
        </Group>
    </Container>
    </>
)}