import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Home, AccountBalanceWallet, Payment, Person } from '@material-ui/icons';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: AccountBalanceWallet, path: '/wallet', label: 'Wallet' },
    { icon: Payment, path: '/payments', label: 'Pay' },
    { icon: Person, path: '/profile', label: 'Profile' },
  ];

  return (
    <Nav>
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavItem
            key={item.path}
            onClick={() => navigate(item.path)}
            active={location.pathname === item.path}
            whileTap={{ scale: 0.9 }}
          >
            <Icon />
            <span>{item.label}</span>
          </NavItem>
        );
      })}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  padding: 12px;
  background: white;
  box-shadow: ${props => props.theme.shadows.large};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const NavItem = styled(motion.button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.text};
  cursor: pointer;
  gap: 4px;

  svg {
    font-size: 24px;
  }

  span {
    font-size: 12px;
  }
`;

export default Navigation; 