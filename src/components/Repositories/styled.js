import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { darken} from 'polished'

export const Wrapper = styled(Tabs)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  width: 90%;
  margin-top: 20px;
  border-radius: 20px;
  
  background-color: ${props => props.theme.colors.primary};
`;

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px 0 2px 22px;
  display: flex;
  margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid ${props => darken(0.02, props.theme.colors.primary)};
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  margin: 8px;
  background-color: ${props => props.theme.colors.repositories};

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
