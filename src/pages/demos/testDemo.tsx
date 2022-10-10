import { DemoContainer } from "../../components/DemoContainer"
import { Code, Text } from '@mantine/core'
import { useEffect, useState } from "react"


export const TestDemo = ({breadCrumb}:any) => {

    const [bcs,setBreadcrumbsItems] = breadCrumb

    useEffect(()=>{
        setBreadcrumbsItems([
            { title: 'home', href: '/' },
            { title: 'demo', href: '/demo' },
            { title: 'template', href: '/demo/template' }
        ])
    },[])

    return (
        <DemoContainer title={"template"}>
            <Text>This is a demo page with an example of some features</Text>
        </DemoContainer>
    )
}