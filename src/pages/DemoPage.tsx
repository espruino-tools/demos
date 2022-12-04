import { DemoContainer } from "../components/DemoContainer"
import { useEffect} from "react"


export const DemoPage = ({setBreadcrumbsItems, pageName}:any) => {

    useEffect(()=>{
        setBreadcrumbsItems([
            { title: 'home', href: '/' },
            { title: 'demo', href: '/demo' },
            { title: 'template', href: '/demo/'+pageName }
        ])
    },[pageName, setBreadcrumbsItems])

    return (
        <DemoContainer title={pageName}/>
    )
}