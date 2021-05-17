import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Tab, Tabs, Typography } from "@material-ui/core";
import styled from "@emotion/styled";
import { CategoryContainer } from "./CategoryComponent";

const TabPanelContainer = styled.div``;
const Container = styled.div``;
function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <TabPanelContainer
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </TabPanelContainer>
  );
}

// @ts-ignore
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export function AdminComponent() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Container>
      <Tabs
        value={selectedTab}
        onChange={(_, newValue) => {
          setSelectedTab(newValue);
        }}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Categories"></Tab>
        <Tab label="Products"></Tab>
        <Tab label="Orders"></Tab>
      </Tabs>
      <TabPanel value={selectedTab} index={0}>
        <CategoryContainer />
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        TEST
      </TabPanel>
      <TabPanel value={selectedTab} index={2}>
        BLE
      </TabPanel>
    </Container>
  );
}
