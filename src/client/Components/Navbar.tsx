import React from 'react';

interface NavbarProps {
  title: string;
  links: {
    name: string;
    url: string;
  }[];
}

const Navbar: React.FC<NavbarProps> = ({ title, links }) => {
  return (
    <nav>
      <h1>{title}</h1>
      <ul>
        {links.map(link => (
          <li key={link.name}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;