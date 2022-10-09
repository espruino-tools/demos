import { DemoContainer } from "../components/DemoContainer"
import { Code, Text } from '@mantine/core'

const TestDemoCode = () => {
    return (
        <Code block>
        </Code>
    )
}

export const TestDemo = () => {
    return (
        <DemoContainer title={"Test Demo"} content={[<>DEMO</>,<TestDemoCode/>]} >
            <Text>This is a demo page with an example of some features</Text>
        </DemoContainer>
    )
}