import { Anchor, Card, Title, Text } from "@mantine/core"

export const DemoListItem = ({name,description,link}:{name:string,link:string,description?:string}) => (
    <a style={{textDecoration:'none'}} href={link}>
        <Card withBorder mt="xl" mb="xl">
            <Title order={2}>{name}</Title>
            <Text style={{fontSize:"14px"}}>{description}</Text>
        </Card>
    </a>
)