import { DemoContainer } from "../../components/DemoContainer"
import { Code, Text } from '@mantine/core'
import { useEffect, useState } from "react"


export const Test2 = ({breadCrumb}:any) => {

    const [bcs,setBreadcrumbsItems] = breadCrumb

    useEffect(()=>{
        setBreadcrumbsItems([
            { title: 'home', href: '/' },
            { title: 'demo', href: '/demo' },
            { title: 'test2', href: '/demo/test2' }
        ])
    },[])

    return (
        <DemoContainer title={"react-test"}/>
    )
}