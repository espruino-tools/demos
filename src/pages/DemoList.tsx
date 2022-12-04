import { Title, Text, Container } from "@mantine/core";
import { useEffect, useState } from "react";
import { DemoListItem } from "../components/DemoListItem";

export const DemoList = ({setBreadcrumbsItems}:{setBreadcrumbsItems:Function}) => {

    const [folders,setFolders] = useState([])

    useEffect(()=>{
        setBreadcrumbsItems([
            { title: 'home', href: '/' },
            { title: 'demo', href: '/demo' }
        ])
    },[setBreadcrumbsItems])

    useEffect(()=>{
        fetch(`https://api.github.com/repos/espruino-tools/demos/git/trees/production?recursive=1`)
            .then(async (data:any) => {
                 return await data.json()
            }).then((res:any) => {
                let filtered_res = res.tree.filter((x:any) => x.path.startsWith(`demos/`) && !(x.path.endsWith('README.md') || (x.path.endsWith('demo.mp4')))).map((x:any) => x.path.split('/')[1])
                let uniqueFolders = new Set(filtered_res) 

                setFolders(Array.from(uniqueFolders as any))
            })
    },[])

    return (
        <>
        <div style={{background:"#F2F2F2", width:"100%"}}>
            <Container p={40}>
            <Title>Demos</Title>
            <Text>Here is a list of demos used to show off the espruino tools package.</Text>
            </Container>
        </div>
            <Container>
                {folders.map((page:any) => <DemoListItem key={page} name={page} link={`demo/${page}`}/>)}
            </Container>
        </>
    )
}