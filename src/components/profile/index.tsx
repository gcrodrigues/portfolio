import { useTranslation } from 'react-i18next'
import { Container, Avatar, Headline, Info, Name } from './styles'

export function Profile() {
  const { t } = useTranslation()
  return (
    <Container>
      <Avatar />
      <Info>
        <Name>Gustavo de Carvalho</Name>
        <Headline>{t('profileLocale:headline')}</Headline>
      </Info>
    </Container>
  )
}
