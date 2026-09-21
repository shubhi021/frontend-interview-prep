import { useEffect } from 'react';

export function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ref, callback]);
}



import React, { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './style.css';
import { useOutsideClick } from './hooks/useOutsideClick';

export default function App() {
  const boxRef = useRef();

  useOutsideClick(boxRef, () => toast('Clicked outside 🔥'));
  return (
    <div>
      <Toaster />
      <div className="container">
        <div className="inside" ref={boxRef}>
          <h1 className="text">Click Outside To Show Toast</h1>
        </div>
      </div>
    </div>
  );
}

