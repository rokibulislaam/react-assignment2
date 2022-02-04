import React from 'react';
import styled from 'styled-components';
import { getHeader, getCollapseIcon } from '@mui-treasury/layout';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import { useRowGutterStyles } from '@mui-treasury/styles/gutter/row';
import { useGoogleAvatarStyles } from '@mui-treasury/styles/avatar/google';
import {
  Box,
  Toolbar,
  makeStyles,
  InputBase,
  IconButton,
  Avatar,
} from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import Search from '@material-ui/icons/Search';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import HelpOutline from '@material-ui/icons/HelpOutline';
import Apps from '@material-ui/icons/Apps';

const Header = getHeader(styled);
const CollapseIcon = getCollapseIcon(styled);

const useStyles = makeStyles({
  collapse: {
    marginLeft: -12,
    marginRight: 4,
  },
  logo: {
    height: 40,
  },
  toolbar: {
    minWidth: 768,
    minHeight: '64px !important',
    backgroundColor: '#fff',
    boxShadow: 'inset 0 -1px 0 rgba(100,121,143,0.122)',
  },
  searchInput: {
    backgroundColor: '#f1f3f4',
    height: 48,
    borderRadius: 8,
    padding: '0 8px',
    maxWidth: 720,
    flexGrow: 1,
  },
});

const TopBar = () => {
  const styles = useStyles();
  const actionStyles = useSizedIconButtonStyles({ padding: 8, childSize: 24 });
  const gutterStyles = useRowGutterStyles({ size: 8 });
  const tinyGutterStyles = useRowGutterStyles({
    size: 2,
    before: 10,
  });
  const googleStyles = useGoogleAvatarStyles({ avatarSize: 32, ringSize: 40 });
  const avatarStyles = useSizedIconButtonStyles({ padding: 4, childSize: 32 });
  return (
    <Header>
      <Toolbar className={styles.toolbar}>
        <Box width={238} display={'flex'} alignItems="center">
          <CollapseIcon
            className={styles.collapse}
            sidebarId={'primarySidebar'}
          >
            {() => <Menu />}
          </CollapseIcon>
          <img
            className={styles.logo}
            alt=""
            src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Emblem.png"
          />
        </Box>
        <InputBase
          className={styles.searchInput}
          placeholder="Search mail"
          startAdornment={
            <IconButton
              className={gutterStyles.adjacent}
              classes={actionStyles}
            >
              <Search />
            </IconButton>
          }
          endAdornment={
            <IconButton classes={actionStyles}>
              <ArrowDropDown />
            </IconButton>
          }
        />
        <Box ml="auto" className={tinyGutterStyles.parent}>
          <IconButton classes={actionStyles}>
            <HelpOutline />
          </IconButton>
          <IconButton classes={actionStyles}>
            <Apps />
          </IconButton>
        </Box>
        <Box ml={1} mr={-1.5}>
          <IconButton classes={avatarStyles}>
            <div className={googleStyles.root}>
              <Avatar />
            </div>
          </IconButton>
        </Box>
      </Toolbar>
    </Header>
  );
};

export default TopBar;
