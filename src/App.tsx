import React from "react";
import styled from "styled-components";
import Layout, {
  Root,
  getContent,
  getDrawerSidebar,
} from "@mui-treasury/layout";
import { StylesProvider, CssBaseline, createMuiTheme } from "@material-ui/core";
import TopBar from "./components/TopBar";
import SideNav from "./components/SideNav";
import Main from "./components/Main";

const scheme = Layout();

scheme.configureHeader((builder) => {
  builder.registerConfig("xs", {
    position: "fixed",
    clipped: true,
    initialHeight: 64,
  });
});

scheme.configureEdgeSidebar((builder) => {
  builder
    .create("primarySidebar", { anchor: "left" })
    .registerPermanentConfig("xs", {
      width: 250,
      collapsible: true,
      collapsedWidth: 72,
    });

  builder
    .create("secondarySidebar", { anchor: "right" })
    .registerPersistentConfig("sm", {
      width: 56,
      collapsible: false,
      persistentBehavior: "fit",
    });
});

const Content = getContent(styled);
const DrawerSidebar = getDrawerSidebar(styled);

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#fff",
    },
  },
});

function App() {
  return (
    <StylesProvider injectFirst>
      <Root
        theme={theme}
        scheme={scheme}
        initialState={{
          sidebar: {
            primarySidebar: { collapsed: true },
            secondarySidebar: { open: true },
          },
        }}
      >
        <CssBaseline />
        <TopBar />
        <DrawerSidebar sidebarId={"primarySidebar"}>
          <SideNav />
        </DrawerSidebar>
        <Content>
          <Main />
        </Content>
      </Root>
    </StylesProvider>
  );
}

export default App;
