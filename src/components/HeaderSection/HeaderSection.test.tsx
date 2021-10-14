import HeaderSection from './HeaderSection.index'
import { render, screen } from '@testing-library/react'

const MOCK_STUDENTS = [
   {
      name: 'mocked test',
      profileImage: {
         url: ''
      }
   }
]

describe('<HeaderSection />', () => {
   it('should render the heading', () => {
      render(<HeaderSection students={MOCK_STUDENTS} />)

      expect(
         screen.getByRole('heading', { name: /mocked test/i })
      ).toBeInTheDocument()
   })
})
