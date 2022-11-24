import { PropsWithChildren } from 'react'
import { Menu } from '@carbon/icons-react'
import { Profile } from '../profile'
import { Container, Header, MenuButton } from './styles'

export function Page({ children }: PropsWithChildren) {
  return (
    <Container>
      <Header>
        <div>
          <h1>GC</h1>
          <MenuButton>
            <Menu size={32} />
          </MenuButton>
        </div>
      </Header>

      <main>
        <Profile />
        {children}
      </main>
    </Container>
  )
}
