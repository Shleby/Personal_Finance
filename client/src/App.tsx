import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Overview from './components/Overview';
import NetWorth from './components/NetWorth';
import TaxForcaster from './components/TaxForcaster';
import ExpenseTracker from './components/ExpenseTracker';
import MonthlyBudget from './components/MonthlyBudget';
import FireProgress from './components/FireProgress';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={6}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#becfc2",
  },
  indicator: {
    backgroundColor: 'rgb(0, 102, 9)',
  },
  tabText: {
    color: 'rgb(0, 102, 9)',
  }
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{
            indicator: classes.indicator,
            root: classes.tabText
          }}
        >
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Net Worth" {...a11yProps(1)} />
          <Tab label="Tax Forcaster" {...a11yProps(2)} />
          <Tab label="Expense Tracker" {...a11yProps(3)} />
          <Tab label="Monthly Budget" {...a11yProps(4)} />
          <Tab label="FIRE Progress" {...a11yProps(5)} style={{ width: "20px"}}/>
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Overview />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <NetWorth />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <TaxForcaster />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <ExpenseTracker />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <MonthlyBudget />
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <FireProgress />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
