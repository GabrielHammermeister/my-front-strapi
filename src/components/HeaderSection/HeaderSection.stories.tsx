import HeaderSection from './HeaderSection.index'
import { Meta, Story } from '@storybook/react'

export default {
   title: 'HeaderSection',
   component: HeaderSection,
   args: {
      students: [
         {
            name: 'Gabriel Hammer',
            profileImage: {
               url: ''
            }
         }
      ]
   }
} as Meta

export const Basic: Story = (args) => <HeaderSection students={args.students} />
