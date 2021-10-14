import HeaderSection from './HeaderSection.index'
import { Meta, Story } from '@storybook/react'

export default {
   title: 'HeaderSection',
   component: HeaderSection
} as Meta

export const Basic: Story = (args) => <HeaderSection {...args} />
