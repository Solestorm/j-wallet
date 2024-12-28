import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Container>
      <Header>
        <WelcomeText>
          <h1>Hey, User! 👋</h1>
          <p>Welcome back to your wallet</p>
        </WelcomeText>
        <Balance>
          <span>Available Balance</span>
          <h2>₹10,000</h2>
        </Balance>
      </Header>

      <QuickActions>
        <ActionTitle>Quick Actions</ActionTitle>
        <ActionGrid>
          {actions.map((action) => (
            <ActionCard
              key={action.title}
              whileTap={{ scale: 0.95 }}
            >
              <ActionIcon>{action.icon}</ActionIcon>
              <ActionText>{action.title}</ActionText>
            </ActionCard>
          ))}
        </ActionGrid>
      </QuickActions>

      <RecentTransactions>
        <h3>Recent Transactions</h3>
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            whileHover={{ scale: 1.02 }}
          >
            <TransactionIcon>{transaction.icon}</TransactionIcon>
            <TransactionInfo>
              <TransactionTitle>{transaction.title}</TransactionTitle>
              <TransactionDate>{transaction.date}</TransactionDate>
            </TransactionInfo>
            <TransactionAmount type={transaction.type}>
              {transaction.type === 'credit' ? '+' : '-'} ₹{transaction.amount}
            </TransactionAmount>
          </TransactionItem>
        ))}
      </RecentTransactions>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  padding-bottom: 80px;
`;

const Header = styled.div`
  background: ${props => props.theme.colors.primary};
  padding: 20px;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  margin-bottom: 24px;
`;

// Add the rest of your styled components here

const actions = [
  { title: 'Send Money', icon: '💸' },
  { title: 'Receive', icon: '📥' },
  { title: 'Scan QR', icon: '📱' },
  { title: 'Bills', icon: '📄' },
];

const transactions = [
  {
    id: 1,
    title: 'Coffee Shop',
    date: 'Today, 10:00 AM',
    amount: '250',
    type: 'debit',
    icon: '☕',
  },
  // Add more transactions as needed
];

export default Home; 