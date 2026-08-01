import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    window.location.replace('/our-universe.html');
  }, []);
  return null;
}
