import { Box, Center, SegmentedControl, Stack, Title } from "@mantine/core"
import { useState } from "react";
import {BsCodeSlash,BsFillCameraVideoFill} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'

interface DemoProps{
    title: string;
    children: React.ReactNode;
    content: React.ReactNode[];
}

export const DemoContainer = ({title,children,content}:DemoProps) => {
    const [pageVal,setPageVal] = useState<string>('Demo')
    return (
        
            <Stack>
            <Title>{title}</Title>
            {children}
            <Center>
            <SegmentedControl onChange={(e)=>setPageVal(e)} data={[
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

            {pageVal == "Demo" && content[0]}
            {pageVal == "Code" && content[1]}

            </Stack>

    )
}