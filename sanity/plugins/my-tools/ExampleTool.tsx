import { Card, Text, Stack } from '@sanity/ui'
import { DashboardIcon } from '@sanity/icons'
type Props = {
  title: string
}

const ExampleTool = (props: Props) => {
  const JSXCard = Card as any
  const JSXStack = Stack as any
  const JSXText = Text as any
  return {
    title: props.title,
    name: 'my-custom-tool', // localhost:3333/my-custom-tool
    icon: DashboardIcon,
    component: (prop: any) => (
      <JSXCard padding={4}>
        <JSXStack space={[3, 3, 4]}>
          <JSXCard padding={[3, 3, 4]} radius={2} shadow={1}>
            <JSXText align='center' size={[2, 2, 3]}>
              Some Functionalities <a href='#'>link</a>
            </JSXText>
          </JSXCard>

          <JSXCard padding={[3, 3, 4]} radius={2} shadow={1} tone='primary'>
            <JSXText align='center' size={[2, 2, 3]}>
              Some Functionalities <a href='#'>link</a>
            </JSXText>
          </JSXCard>

          <JSXCard padding={[3, 3, 4]} radius={2} shadow={1} tone='positive'>
            <JSXText align='center' size={[2, 2, 3]}>
              Some Functionalities <a href='#'>link</a>
            </JSXText>
          </JSXCard>

          <JSXCard padding={[3, 3, 4]} radius={2} shadow={1} tone='caution'>
            <JSXText align='center' size={[2, 2, 3]}>
              Some Functionalities <a href='#'>link</a>
            </JSXText>
          </JSXCard>

          <JSXCard padding={[3, 3, 4]} radius={2} shadow={1} tone='critical'>
            <JSXText align='center' size={[2, 2, 3]}>
              Some Functionalities <a href='#'>link</a>
            </JSXText>
          </JSXCard>
        </JSXStack>
      </JSXCard>
    ),
  }
}

export default ExampleTool
