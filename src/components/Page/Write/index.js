import React from "react"
import styled from "styled-components"

import { Helmet } from "react-helmet"

import Layout from "src/components/Layout/container"
// import Editor from "src/components/Editor"
import TinyEditor from 'src/components/TinyEditor'
import LexicalEditor from 'src/components/LexicalEditor'
import Sidebar from "src/components/Sidebar"

const WritePage = ({ fetchAccounts, activeAccount, location }) => {

    return (<PageWrapper>
              <Layout location={location} hasHeader={false} hasFooter={false}>
                  <Helmet><title>Write</title></Helmet>
                  <SectionWrapper>
                    <Sidebar />
                    <LexicalEditor />
                  </SectionWrapper>
              </Layout>
            </PageWrapper>)
}

export default WritePage


const PageWrapper = styled.div`
  width: 100%;
  height: 100%;

  main {
    padding-top: 0;
  }
`

const WritePageContainer = styled.div`
    // display: flex;
    flex: 1;
    margin: 0 auto;
    color: #fff; 
    min-height: 100vh;
    width: 100%;
    justify-content: center;
    font-family: 'sans-serif';
    height: 100%;
    background: #fff;
    flex-direction: column;
    color: #000;
`

const EditorSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`

const SidebarContainer = styled.div`
  background: #000;
  width: 100%;
`
const SidebarNav = styled.nav``

const SidebarList = styled.ul``

const SidebarListItem = styled.li``
