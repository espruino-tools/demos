import { FaSass, FaCss3,FaReact, FaHtml5 } from 'react-icons/fa'
import {SiTypescript, SiJavascript} from 'react-icons/si'
import {VscJson} from 'react-icons/vsc'
export const FileIcons = {
    "html": <FaHtml5/>,
    "js": <SiJavascript/>,
    "ts": <SiTypescript/>,
    "jsx": <FaReact/>,
    "tsx": <FaReact/>,
    "css": <FaCss3/>,
    "sass": <FaSass/>,
    "scss": <FaSass/>,
    "json": <VscJson/>
    
}



export type extension = 'html' | 'js' | 'ts' | 'jsx' | 'tsx' | 'css' | 'sass' | 'scss' | 'json' 

