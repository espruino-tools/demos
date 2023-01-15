import { Card, Title, Text } from "@mantine/core"

export const DemoListItem = ({thumbnail,name,description,link}:{thumbnail:string,name:string,link:string,description?:string}) => (
    <a key={name} style={{textDecoration:'none'}} href={link}>
        <Card withBorder mt="xl" mb="xl" sx={{backgroundImage:`url(${thumbnail})`}}>
            <Title order={2}>{name}</Title>
            <Text style={{fontSize:"14px"}}>{description}</Text>
        </Card>
    </a>
)