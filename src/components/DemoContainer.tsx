import { Box, Center, Code, SegmentedControl, Stack, Title,Text, Card, Container, Tabs } from "@mantine/core"
import { useEffect, useState } from "react";
import {BsCodeSlash,BsFillCameraVideoFill} from 'react-icons/bs'
import { FaReadme } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'


interface DemoProps{
    title: string;
    children: React.ReactNode;
}

const DemoCode = ({name}:{name:string}) => {
    let [code,setCode] = useState<string>("")

    useEffect(()=>{
        console.log('');
        // https://raw.githubusercontent.com/espruino-tools/demos/main/demos/template/index.ts
        fetch(`https://raw.githubusercontent.com/espruino-tools/demos/main/demos/${name}/index.ts`)
            .then(async (data:any) => {
                 return await data.text()
            }).then((res:string) => {
                setCode(res)
            })
    },[])
    return (
        <Code block>
            {code}
        </Code>
    )
}

const DemoReadme = ({name}:{name:string}) => {
    let [readme,setReadme] = useState<string>("")

    useEffect(()=>{
        console.log('');
        fetch(`https://raw.githubusercontent.com/espruino-tools/demos/main/demos/${name}/README.md`)
            .then(async (data:any) => {
                let res = await data.text()
                console.log(res)
                 return res
            }).then((res:string) => {
                setReadme(res)
            })
    },[])
    return <Text><ReactMarkdown>{readme}</ReactMarkdown></Text>
}

const DemoVideo = ({name}:{name:string}) => {
    return (
        <>

            <Center>
                <video style={{borderRadius:20}} controls src={`https://raw.githubusercontent.com/espruino-tools/demos/main/demos/${name}/demo.mp4`}></video>
            </Center>
        </>
    )
}


export const DemoContainer = ({title,children}:DemoProps) => {
    const [pageVal,setPageVal] = useState<string>('Readme')
    return (
            <>
            <div style={{background:"#F2F2F2"}}>
                <Container p="xl" pb={43}>
            <Title pt="xl">{title.toLocaleUpperCase()}</Title>
                {children}
            </Container>
            </div>
            
            <Tabs variant="outline" defaultValue="readme">
      <Tabs.List style={{width:"100%",background:"#F2F2F2"}}>
        <div style={{width:"100%",background:"#F2F2F2", display:"flex",justifyContent:"left", maxWidth:"980px",marginLeft:"auto",marginRight:"auto"}}>
            <Tabs.Tab icon={<FaReadme/>} style={{marginLeft:"10px"}} value="readme">Readme</Tabs.Tab>
            <Tabs.Tab icon={<BsFillCameraVideoFill/>} value="video">Video</Tabs.Tab>
            <Tabs.Tab icon={<BsCodeSlash/>} value="code">Code</Tabs.Tab>
        </div>
      </Tabs.List>
        <Container pt="xl">
      <Tabs.Panel value="readme" pt="xs">
      <DemoReadme name={title}/>
      </Tabs.Panel>

      <Tabs.Panel value="video" pt="xs">
      <DemoVideo name={title}/>
      </Tabs.Panel>

      <Tabs.Panel value="code" pt="xs">
      <DemoCode  name={title}/>
      </Tabs.Panel>
      </Container>
    </Tabs>
            </>

    )
}