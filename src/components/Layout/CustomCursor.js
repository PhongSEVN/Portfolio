import { useRef, useEffect } from 'react';
import './style.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current && followerRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        followerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleHover = () => {
      if (cursorRef.current && followerRef.current) {
        cursorRef.current.classList.add('hovered');
        followerRef.current.classList.add('hovered');
      }
    };

    const handleUnhover = () => {
      if (cursorRef.current && followerRef.current) {
        cursorRef.current.classList.remove('hovered');
        followerRef.current.classList.remove('hovered');
      }
    };

    window.addEventListener('mousemove', moveCursor);

    // Add hover effect to links and buttons
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);
  
  return (
    <>
      <div ref={cursorRef} className="custom-cursor-dot" />
      <div ref={followerRef} className="custom-cursor-follower" />
    </>
  );
};

export default CustomCursor;
