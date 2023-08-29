import StoreProvider from './StoreProvider'
import Header from './Header'

const HeaderProvider = () => {
  return (
    <StoreProvider>
      <Header />
    </StoreProvider>
  )
}

export default HeaderProvider
