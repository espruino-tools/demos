import { Anchor, Title, Text, Container } from "@mantine/core";
import { useEffect, useState } from "react";
import { DemoListItem } from "../components/DemoListItem";

export const DemoList = ({breadCrumb}:any) => {

    let [breadcrumbsItems,setBreadcrumbsItems] = breadCrumb

    useEffect(()=>{
        setBreadcrumbsItems([
            { title: 'home', href: '/' },
            { title: 'demo', href: '/demo' }
        ])
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
            <DemoListItem name="Template" description="here is a test description" link="demo/template"/>
            <DemoListItem name="React-Test" description="here is a test description" link="demo/test2"/>
                <DemoListItem name="404 example" description="this is an example of a bad link" link="demo/test"/>

            </Container>
        </>
    )
}