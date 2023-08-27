'use client';
import { useState } from 'react'
import Search from '../../components/Search'
import { User } from '../../Interfaces/interfaces';

const SearchPage = () => {
 
  const [user, setUser] = useState<User>();

 
  return (
    <>
      {user? <p style={{ color: '#fff' }}>hello {user.login}</p> : <Search getName={(result: User) => setUser(result)} /> }
    </>
  )
}
export default SearchPage
