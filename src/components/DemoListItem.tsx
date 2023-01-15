import { Card, Title, Text } from "@mantine/core"

export const DemoListItem = ({thumbnail,name,description,link}:{thumbnail:string,name:string,link:string,description?:string}) => (
    <Card withBorder mt="xl" mb="xl" sx={{maxWidth:400, minWidth:350}}>
        
        <a className="hdn" key={name} href={link}>

            <Card sx={{ backgroundImage: `url(${thumbnail})`, backgroundSize:'contain',backgroundRepeat:'no-repeat', backgroundPosition:'center', height:200 }} children={undefined}></Card>
            <Title style={{marginTop:10}} order={2} sx={{'textAlign':'center'}}>{name}</Title>
            <Text sx={{fontSize:"14px"}}>{description}</Text>
        </a>
    </Card>
)