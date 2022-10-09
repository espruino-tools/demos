import { Box, Center, Code, SegmentedControl, Stack, Title } from "@mantine/core"
import { useEffect, useState } from "react";
import {BsCodeSlash,BsFillCameraVideoFill} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import { FaReadme } from 'react-icons/fa'

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
                 return await data.text()
            }).then((res:string) => {
                setReadme(res)
            })
    },[])
    return <>{readme}</>
}

const DemoVideo = ({name}:{name:string}) => {
    return <><video src={`https://raw.githubusercontent.com/espruino-tools/demos/main/demos/${name}/demo.mp4`}></video></>
}


export const DemoContainer = ({title,children}:DemoProps) => {
    const [pageVal,setPageVal] = useState<string>('Readme')
    return (
        
            <Stack>
            <Title>{title}</Title>
            {children}
            <Center>
            <SegmentedControl onChange={(e)=>setPageVal(e)} data={[
                {
                    value:"Readme",
                    label: (
                        <Center>
                            <FaReadme/>
                            <Box ml={10}>Introduction</Box>
                        </Center>
                    )
                    },
                {
                value:"Demo",
                label: (
                    <Center>
                        <BsFillCameraVideoFill/>
                        <Box ml={10}>Demo</Box>
                    </Center>
                )
                },
                {
                value:"Code",
                label: (
                    <Center>
                        <BsCodeSlash/>
                        <Box ml={10}>Code</Box>
                    </Center>
                )
                }
            ]}/>
                        </Center>

            {pageVal == "Readme" && <DemoReadme name={title}/>}
            {pageVal == "Demo" && <DemoVideo name={title}/>}
            {pageVal == "Code" && <DemoCode name={title}/>}

            </Stack>

    )
}