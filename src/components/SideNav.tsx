import React from "react";
import styled from "styled-components";
import {
  useSidebarCtx,
  useSidebarCollapse,
  getSidebarContent,
} from "@mui-treasury/layout";
import { Box, List, Divider } from "@material-ui/core";
import GmailButton from "@mui-treasury/components/button/gmail";
import GmailSidebarItem from "@mui-treasury/components/sidebarItem/gmail";
import { GmailSidebarItemProps } from "@mui-treasury/components/sidebarItem/gmail/GmailSidebarItem";
// @ts-ignore
import Menu from "@mui-treasury/components/menu/collapsible";

import Inbox from "@material-ui/icons/Inbox";
import Star from "@material-ui/icons/Star";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";
import People from "@material-ui/icons/People";
import Info from "@material-ui/icons/Info";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";
import ModeComment from "@material-ui/icons/ModeComment";
import Schedule from "@material-ui/icons/Schedule";
import Mail from "@material-ui/icons/Mail";
import Report from "@material-ui/icons/Report";
import Settings from "@material-ui/icons/Settings";
import Videocam from "@material-ui/icons/Videocam";
import Keyboard from "@material-ui/icons/Keyboard";

const SidebarContent = getSidebarContent(styled);

const SideNav = () => {
  const [index, setIndex] = React.useState(0);
  const { expanded } = useSidebarCtx();
  const { state } = useSidebarCollapse();
  const collapsed = !expanded && (state.collapsed as boolean);
  const commonProps = (i: number) => ({
    collapsed,
    selected: i === index,
    onClick: () => {
      setIndex(i);
    },
    dotOnCollapsed: true,
  });
  return (
    <>
      <Box mt={2} mb={collapsed ? 1 : 2} pl={1}>
        <GmailButton collapsed={collapsed} />
      </Box>
      <SidebarContent>
        <Box maxWidth={240}>
          <List>
            <GmailSidebarItem
              color={"#da3125"}
              startIcon={<Inbox />}
              label={"Inbox"}
              amount={"200"}
              {...commonProps(0)}
              dotOnCollapsed={false}
            />
            <GmailSidebarItem
              startIcon={<Star />}
              label={"Starred"}
              {...commonProps(1)}
            />
            <GmailSidebarItem
              startIcon={<InsertDriveFile />}
              label={<b>Drafts</b>}
              amount={"5"}
              {...commonProps(2)}
            />
            <GmailSidebarItem
              color={"#1a73e8"}
              startIcon={<People />}
              label={<b>Social</b>}
              {...commonProps(3)}
            />
            <GmailSidebarItem
              color={"#e37400"}
              startIcon={<Info />}
              label={"Updates"}
              {...commonProps(4)}
            />
            <Menu
              renderToggle={({
                collapsed: menuCollapsed,
                onClick,
              }: {
                collapsed: boolean;
                onClick: GmailSidebarItemProps["onClick"];
              }) => (
                <GmailSidebarItem
                  startIcon={
                    menuCollapsed ? <KeyboardArrowUp /> : <KeyboardArrowDown />
                  }
                  label={collapsed ? "" : (menuCollapsed ? "Less" : "More")}
                  onClick={onClick}
                />
              )}
            >
              <GmailSidebarItem
                startIcon={<ModeComment />}
                label={"Chats"}
                {...commonProps(5)}
              />
              <GmailSidebarItem
                startIcon={<Schedule />}
                label={"Scheduled"}
                {...commonProps(6)}
              />
              <GmailSidebarItem
                startIcon={<Mail />}
                label={"All Mail"}
                {...commonProps(7)}
              />
              <GmailSidebarItem
                startIcon={<Report />}
                label={"Spam"}
                amount={"52"}
                {...commonProps(8)}
              />
              <GmailSidebarItem
                startIcon={<Settings />}
                label={"Manage Labels"}
                {...commonProps(9)}
              />
            </Menu>
          </List>
        </Box>
      </SidebarContent>
      <Divider />
      <Box maxWidth={240} pb={3} pt={1.5}>
        <List
          subheader={
            <Box ml={"26px"} mr={"12px"} mb={1}>
              <b>Meet</b>{" "}
              <Box
                ml={0.5}
                display="inline-flex"
                px={0.5}
                bgcolor="#1a73e8"
                color="#fff"
                fontSize="0.75rem"
                borderRadius={4}
              >
                New
              </Box>
            </Box>
          }
        >
          <GmailSidebarItem
            startIcon={<Videocam />}
            label={"Start a meeting"}
            {...commonProps(10)}
          />
          <GmailSidebarItem
            startIcon={<Keyboard />}
            label={"Join a meeting"}
            {...commonProps(11)}
          />
        </List>
      </Box>
    </>
  );
};

export default SideNav;
