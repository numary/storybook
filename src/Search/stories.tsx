import React from 'react';

import { Box, SxProps, Typography } from '@mui/material';

import { Search, SearchGroup, SearchTrigger } from '.';

import { Chip } from '../Chip';
import { storyDocsParameters } from '../utils';

export default {
  title: 'Design System/Search',
  component: Search,
};

const ledgersStyle: SxProps = {
  width: '100%',
  height: '40px',
  background: '#2B2D2F',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 12px',
  boxSizing: 'border-box',
  cursor: 'pointer',
  transition: 'background 200ms ease-in-out',

  '&:hover': {
    background: '#3C3F41',
  },
};

const transationsStyle: SxProps = {
  width: '100%',
  height: '40px',
  background: '#2B2D2F',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 4px 0 12px',
  boxSizing: 'border-box',
  cursor: 'pointer',
  transition: 'background 200ms ease-in-out',
  justifyContent: 'space-between',

  '&:hover': {
    background: '#3C3F41',
  },
};

const ledgersElements: SearchGroup = {
  title: 'Ledgers',
  items: [
    <Box key="1" sx={ledgersStyle}>
      <Typography>wallet-002</Typography>
    </Box>,
    <Box key="2" sx={ledgersStyle}>
      <Typography>wallet-003</Typography>
    </Box>,
  ],
  showMore: (
    <Typography
      sx={{
        opacity: 0.5,
        fontSize: 12,
        textDecoration: 'underline',
      }}
    >
      Show more
    </Typography>
  ),
};

const transactionsElements: SearchGroup = {
  title: 'Transations',
  items: [
    <Box key="1" sx={transationsStyle}>
      <Typography>transation-1</Typography>
      <Chip label="001" color="blue" variant="square" />
    </Box>,
    <Box key="1" sx={transationsStyle}>
      <Typography>test-2</Typography>
      <Chip label="006" color="blue" variant="square" />
    </Box>,
  ],
  showMore: (
    <Typography
      sx={{
        opacity: 0.5,
        fontSize: 12,
        textDecoration: 'underline',
      }}
    >
      Show more
    </Typography>
  ),
};

export const Default = () => (
  <Search
    placeholder="Search an element"
    elements={[ledgersElements, transactionsElements]}
    trigger={<SearchTrigger>Search an element</SearchTrigger>}
  />
);

Default.storyName = 'Default';
Default.parameters = storyDocsParameters;

export const WithNavigation = () => (
  <Search
    placeholder="Search an element"
    elements={[ledgersElements, transactionsElements]}
    trigger={<SearchTrigger>Search an element</SearchTrigger>}
    navigation={
      <Box
        sx={{ padding: '16px', borderBottom: '1px solid hsl(210, 4%, 18%)' }}
      >
        <Typography
          sx={{
            color: '#FFFFFF',
            mb: '8px',
            opacity: 0.4,
            textTransform: 'uppercase',
          }}
        >
          Navigation
        </Typography>
        <Box sx={{ display: 'flex', gap: '12px' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              sx={{
                color: '#FFFFFF',
                textTransform: 'uppercase',
                opacity: 0.6,
                mb: '8px',
              }}
            >
              Ledgers
            </Typography>
            <Box>
              <Typography sx={{ color: '#FFFFFF' }}>Ledgers</Typography>
              <Typography sx={{ color: '#FFFFFF' }}>Transactions</Typography>
              <Typography sx={{ color: '#FFFFFF' }}>Accounts</Typography>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              sx={{
                color: '#FFFFFF',
                textTransform: 'uppercase',
                opacity: 0.6,
                mb: '8px',
              }}
            >
              Payments
            </Typography>
            <Box>
              <Typography sx={{ color: '#FFFFFF' }}>Payments</Typography>
              <Typography sx={{ color: '#FFFFFF' }}>Accounts</Typography>
              <Typography sx={{ color: '#FFFFFF' }}>Wallets</Typography>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              sx={{
                color: '#FFFFFF',
                textTransform: 'uppercase',
                opacity: 0.6,
                mb: '8px',
              }}
            >
              Flows
            </Typography>
            <Box>
              <Typography sx={{ color: '#FFFFFF' }}>Workflows</Typography>
              <Typography sx={{ color: '#FFFFFF' }}>Instances</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    }
  />
);

WithNavigation.storyName = 'With navigation';
WithNavigation.parameters = storyDocsParameters;

export const WithLoading = () => (
  <Search
    placeholder="Search an element"
    elements={[ledgersElements, transactionsElements]}
    trigger={<SearchTrigger>Search an element</SearchTrigger>}
    isLoading
  />
);

WithLoading.storyName = 'With loading';
WithLoading.parameters = storyDocsParameters;
