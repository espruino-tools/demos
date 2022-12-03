import { Box, Center, Code, SegmentedControl, Stack, Title,Text, Card, Container, Tabs, Divider } from "@mantine/core"
import { ReactNode, useEffect, useState } from "react";
import {BsCodeSlash,BsFillCameraVideoFill} from 'react-icons/bs'
import { FaReadme } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import '../style/demoContainer.css'
import { Prism } from '@mantine/prism';
import { extension, FileIcons } from "../assets/fileTypeIcons";
import { JsxElement } from "typescript";

interface DemoProps{
    title: string;
}

const DemoCode = ({name}:{name:string}) => {
    let [code,setCode] = useState<string>("")
    let [files,setFiles] = useState<any>([])
    let [chosenFile,setChosenFile] = useState<any>(undefined)
    let [fileExtension, setFileExtension] = useState<any>("js")

    useEffect(()=>{
        console.log('');
        fetch(`https://api.github.com/repos/espruino-tools/demos/git/trees/production?recursive=1`)
            .then(async (data:any) => {
                 return await data.json()
            }).then((res:any) => {
                let filtered_res = res.tree.filter((x:any) => x.path.startsWith(`demos/${name}/`) && !(x.path.endsWith('README.md') || (x.path.endsWith('demo.mp4'))))
                console.log(filtered_res)
                setFiles(filtered_res)
                setChosenFile(filtered_res[0])
            })
    },[])

    useEffect(()=>{
        if(chosenFile !== undefined){
        fetch(`https://raw.githubusercontent.com/espruino-tools/demos/main/${chosenFile.path}`)
        .then(async (data:any) => {
            return await data.text()
       }).then((res:string) => {
           setCode(res);
       })
       setFileExtension(chosenFile.path.toString().split('.')[1] )
    }
    },[chosenFile])

    const getFileExtension = (obj:any) => obj.path.split(`demos/${name}/`)[1].toString().split('.')[1]

    const getFileIcon = (ext:string) => FileIcons[ext as extension]

    return (
       <>
       <div style={{display:'flex'}}>
            <div style={{paddingRight:25}}>
                <Tabs orientation='vertical' defaultValue={files[0]?.path}>
                <Tabs.List>
                {files.map((x:any) => <Tabs.Tab icon={getFileIcon(getFileExtension(x))} value={x.path} onClick={()=>setChosenFile(x)}>{x.path.split(`demos/${name}/`)[1]}</Tabs.Tab>)}
                </Tabs.List>
                </Tabs>
            </div>
            <div style={{width:"100%"}}>
                <Prism scrollAreaComponent="div" style={{width:"100%"}} withLineNumbers language={fileExtension}>
                {code}
                </Prism>
            </div>
        </div></>
    )
}

const DemoVideo = ({name,textContent}:{name:string,textContent:string}) => {

    const [expandedDescription, setExpandedDescription] = useState(false);

    return (
        <>
                <div className="video-container">
                    <div style={{padding:25,position:'relative'}}>
                        <video style={{}} controls src={`https://raw.githubusercontent.com/espruino-tools/demos/main/demos/${name}/demo.mp4`}></video>
                        <Text className={`${expandedDescription ? "video-description open" : "video-description"}`}><ReactMarkdown>{textContent}</ReactMarkdown></Text>
                        <button className="expand-description" onClick={()=>setExpandedDescription(!expandedDescription)}><Divider labelPosition="center" label={expandedDescription ? "see less" : "see more"}/></button>
                    </div>
                    <div className="video-links-container">
                        <div className="video-links">
                            Github
                        </div>
                    </div>
                </div>
                
        </>
    )
}


export const DemoContainer = ({title}:DemoProps) => {
    const [pageVal,setPageVal] = useState<string>('video')
    let [readme,setReadme] = useState<string>("")

    useEffect(()=>{
        console.log('');
        fetch(`https://raw.githubusercontent.com/espruino-tools/demos/main/demos/${title}/README.md`)
            .then(async (data:any) => {
                let res = await data.text()
                console.log(res)
                 return res
            }).then((res:string) => {
                setReadme(res)
            })
    },[])
    return (
            <>
            <div style={{background:"#F2F2F2"}}>
                <Container p="xl" pb={43}>
                    <Text>
                <ReactMarkdown>
                {readme.split("<!-- README DIVIDER -->")[0]}
                </ReactMarkdown>
                </Text>
            </Container>
            </div>
            
            <Tabs variant="outline" defaultValue="video">
      <Tabs.List style={{width:"100%",background:"#F2F2F2"}}>
        <div style={{width:"100%",background:"#F2F2F2", display:"flex",justifyContent:"left", maxWidth:"980px",marginLeft:"auto",marginRight:"auto"}}>

            <Tabs.Tab icon={<BsFillCameraVideoFill/>} style={{marginLeft:"10px"}} value="video">Video</Tabs.Tab>
            <Tabs.Tab icon={<BsCodeSlash/>} value="code">Code</Tabs.Tab>
        </div>
      </Tabs.List>
        <Container pt="xl">

      <Tabs.Panel value="video" pt="xs">
      <DemoVideo name={title} textContent={readme.split("<!-- README DIVIDER -->")![1]}/>
      </Tabs.Panel>

      <Tabs.Panel value="code" pt="xs">
      <DemoCode  name={title}/>
      </Tabs.Panel>
      </Container>
    </Tabs>
            </>

    )
}