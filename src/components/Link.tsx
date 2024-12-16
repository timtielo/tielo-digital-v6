import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ href, children, className = '' }: LinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Update the URL
    window.history.pushState({}, '', href);
    
    // Create and dispatch a custom pushstate event
    const pushStateEvent = new Event('pushstate');
    window.dispatchEvent(pushStateEvent);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add active state for current page
  const isActive = window.location.pathname === href;
  const activeClass = isActive ? 'text-primary' : '';

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`hover:text-primary transition-colors duration-200 ${activeClass} ${className}`}
    >
      {children}
    </a>
  );
}