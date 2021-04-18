import { useEffect } from 'react';
import Homepage from '../components/Home';
import redirectUser from '../RedirectUser';


export default function Home() {
  useEffect(() => {
     redirectUser();
  }, [])
  
  return (
      <Homepage />      
  )
}
