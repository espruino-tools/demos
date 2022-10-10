import { Anchor, Title, Text, Container } from "@mantine/core";
import { DemoListItem } from "../components/DemoListItem";

export const DemoList = () => (
    <>
    <div style={{background:"#F2F2F2", width:"100%"}}>
        <Container p={40}>
        <Title>Demos</Title>
        <Text>Here is a list of demos used to show off the espruino tools package.</Text>
        </Container>
    </div>
        <Container>
            <DemoListItem name="Test" description="here is a test description" link="demo/test"/>
            <DemoListItem name="Test 2" description="this is another test description of this item" link="demo/test"/>

        </Container>
    </>
)