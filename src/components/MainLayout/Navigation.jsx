import { NavLink } from 'react-router-dom';

const navigation = [
  { name: 'HOME', route: '/' },
  { name: 'TWEETS', route: 'tweets' },
];

const Navigation = () => {
  return (
    <nav className="flex gap-12 ">
      {navigation.map(link => (
        <NavLink key={link.name} to={link.route}>
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
