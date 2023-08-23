import { Card, Text } from '@sanity/ui'
import { DashboardIcon } from '@sanity/icons'
type Props = {
  title: string
}

const ExampleTool = (props: Props) => {
  return {
    title: props.title,
    name: 'my-custom-tool', // localhost:3333/my-custom-tool
    icon: DashboardIcon,
    component: (props) => (
      <Card padding={4}>
        <Text>
          {/* Add Functionality here */}
          My custom tool!
        </Text>
      </Card>
    ),
  }
}

export default ExampleTool
