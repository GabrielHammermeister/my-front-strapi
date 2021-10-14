import { getImageUrl } from 'utils/getImageUrl'
import * as S from './HeaderSection.styles'

const HeaderSection = ({ students }) => (
   <S.Container>
      <S.Title>{students[0].name}</S.Title>
      <S.Description>Some description about student</S.Description>
      <S.Image src={getImageUrl(students[0].profileImage.url)} />
   </S.Container>
)

export default HeaderSection
