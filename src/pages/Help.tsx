import { Container, Title, Text, List, Code, Image } from "@mantine/core"
import { useEffect } from "react"
import { Prism } from '@mantine/prism';

export const Help = ({setBreadcrumbsItems}:{setBreadcrumbsItems:Function}) => {

    useEffect(()=>{
        setBreadcrumbsItems([
            { title: 'home', href: '/' },
            { title: 'submit a demo', href: '/help' }
        ])
    },[setBreadcrumbsItems])

    return (
        <>
        <div style={{background:"#F2F2F2"}}>
            <Container p="xl" pb={43}>
                <Title>Submitting a demo</Title>
                <Text>Below is a short tutorial on how you can submit a demo of your own!</Text>
            </Container>
        </div>
        <Container p="xl">
            <Title order={2}>Lets get started 😎</Title>
            <Text pb="md">What do you need?</Text>
            <List>
                <List.Item>An espruino project</List.Item>
                <List.Item>A Github account</List.Item>
            </List>

            <Text pt="md" pb="md">To get started with adding a project to this demos site, first you must clone the github repository. This can be done as shown below</Text>

            <Code >git clone https://github.com/espruino-tools/demos</Code>

            <Text pt="md" pb="md">Once your here open your newly cloned repository in an IDE or text editor of your choice, youll notice a folder at the top level called demos</Text>
            <Image radius={'sm'} width={400} src="https://i.imgur.com/0YDrDd1.png"/>

            <Text pt="md" pb="md">First create a new branch, try and stick to the convention <Code>demo/my-demo</Code></Text>


            <Text pt="md" pb="md">All you need to do now is drag your new project into this demos, commit, push and publish the branch. After this you can make a pull request into the dev branch and if the demo is suitable it will be added to the production site.</Text>

            <Title order={3}>What needs to be in the folder 🤔</Title>
            <Text>There are only 2 required files for the project, <Code>demo.mp4</Code> and <Code>README.md</Code>. All the rest of the files are up to you.</Text>

            <Title pt={'lg'} order={4}>demo.mp4</Title>
            <Text>demo.mp4 is a short video showcasing the project, this is required for a demo to be accepted and will be shown on the video tab of a demos page.</Text>

            <Title pt={'lg'} order={4}>README.md</Title>
            <Text>README.md is used for 2 things on the demo page, the page header description and the video description.</Text>

            <Text pb="md">To use the README.md file correctly you must use <Code>{"<!-- README DIVIDER -->"}</Code> this is used to split your readme file into Demo description and video description. <i>Side note: demo description (or the first part before <Code>{"<!-- README DIVIDER -->"}</Code>) has a character limit of 128.</i> An example of a README.md is below</Text>

            <Prism withLineNumbers language="markdown">
                {`
# My Demo
Here is a short description of my demo.

<!-- README DIVIDER -->

## Video name / title
Here you can talk about the video or just use this space to add further detail about the project that the previous 128 characters did not allow

You can also utilise any markdown in this file, 

dividers

---

**bold text**

*italic text*

> block quotes

- lists
        - with sub items

\`code blocks\`

and even embedding images ![name](link) or just links [name](link) 

In the future this may be able to include HTML or advanced markdown such as tables.

                `}
            </Prism>

<Title pt="md" order={4}>As for the code 🧑🏼‍💻</Title>
<Text>The code section of the demo page is designed to show each item in the repository besides .mp4 and .md files, there is currently icon support for <Code>.html</Code>, <Code>.js</Code>,<Code>.ts</Code>, <Code>.jsx</Code>,<Code>.tsx</Code>, <Code>.css</Code>, <Code>.json</Code> and <Code>.scss</Code> </Text>


            <Title pt={'lg'} order={3}>Thats it 😀</Title>
            <Text>You now know how to request adding your demo to the site.</Text>
    
        </Container>
        </>
    )
}