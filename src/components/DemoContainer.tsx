import { Text, Container, Tabs, Divider } from "@mantine/core"
import {  useEffect, useState } from "react";
import {BsCodeSlash,BsFillCameraVideoFill} from 'react-icons/bs'
import ReactMarkdown from 'react-markdown'
import '../style/demoContainer.css'
import { Prism } from '@mantine/prism';
import { extension, FileIcons } from "../assets/fileTypeIcons";
import { FaFolder } from "react-icons/fa";

interface DemoProps{
    title: string;
}

const DemoCode = ({name}:{name:string}) => {
    let [code,setCode] = useState<string>("")
    let [files,setFiles] = useState<any>([])
    let [chosenFile,setChosenFile] = useState<any>(undefined)
    let [fileExtension, setFileExtension] = useState<any>("js")

    useEffect(()=>{
        fetch(`https://api.github.com/repos/espruino-tools/demos/git/trees/production?recursive=1`)
            .then(async (data:any) => {
                 return await data.json()
            }).then((res:any) => {
                let filtered_res = res.tree.filter((x:any) => x.path.startsWith(`demos/${name}/`) && !(x.path.endsWith('README.md') || (x.path.endsWith('demo.mp4'))))
                setFiles(filtered_res)
                setChosenFile(filtered_res[0])
            })
    },[name])

    useEffect(()=>{
        if(chosenFile !== undefined){
        fetch(`https://raw.githubusercontent.com/espruino-tools/demos/main/${chosenFile.path}`)
        .then(async (data:any) => {
            return await data.text()
       }).then((res:string) => {
           setCode(res);
       })
       setFileExtension(chosenFile.path.toString().split('.')[chosenFile.path.toString().split('.').length - 1] )
    }
    },[chosenFile])

    const getFileExtension = (obj:any) => obj.path.split(`demos/${name}/`)[1].toString().split('.')[obj.path.split(`demos/${name}/`)[1].toString().split('.').length - 1]

    const getFileIcon = (ext:string) => {
        return FileIcons[ext as extension] || <FaFolder/>
    }

    return (
       <>
       <div style={{display:'flex'}}>
            <div style={{paddingRight:25, marginBottom: 20}}>
                <Tabs orientation='vertical' defaultValue={files[0]?.path}>
                <Tabs.List>
                {files.map((x:any) => <Tabs.Tab key={x.path.toString()} icon={getFileIcon(getFileExtension(x))} disabled={x.path.split(`demos/${name}/`)[1].toString().split('.').length === 1} value={x.path} style={{marginLeft: x.path.split(`demos/${name}/`)[1].split('/').length * 10}} onClick={()=>setChosenFile(x)}>{x.path.split(`demos/${name}/`)[1].split('/')[x.path.split(`demos/${name}/`)[1].split('/').length - 1]}</Tabs.Tab>)}
                </Tabs.List>
                </Tabs>
            </div>
            <div style={{width:"100%"}}>
                <Prism scrollAreaComponent="div" style={{width:"100%", marginBottom: 20}} withLineNumbers language={fileExtension}>
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
                        <Text className={`${expandedDescription ? "video-description open" : textContent?.length > 100 ? "video-description" : "video-description open"}`}><ReactMarkdown>{textContent}</ReactMarkdown></Text>
                        {textContent?.length > 100 && <button className="expand-description" onClick={()=>setExpandedDescription(!expandedDescription)}><Divider labelPosition="center" label={expandedDescription ? "see less" : "see more"}/></button>}
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
    let [readme,setReadme] = useState<string>("")

    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/espruino-tools/demos/main/demos/${title}/README.md`)
            .then(async (data:any) => {
                let res = await data.text()
                 return res
            }).then((res:string) => {
                setReadme(res)
            })
    },[title])
    return (
            <>
            <div style={{background:"#F2F2F2"}}>
                <Container p="xl" pb={43}>
                    <Text>
                <ReactMarkdown>
                {readme.split("<!-- README DIVIDER -->")[0].slice(0,128)}
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