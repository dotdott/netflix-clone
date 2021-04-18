import { useEffect, useState } from 'react';
import Homepage from '../components/Home';
import redirectUser from '../RedirectUser';


export default function Home() {
  redirectUser();
  
  return (
      <Homepage />      
  )
}
