import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import { Layout, Typography, Space} from 'antd';
import  Navbar  from './components/Navbar';
import  HomePage  from './components/HomePage';
import  Exchanges  from './components/Exchanges';
import  Cryptocurrencies  from './components/Cryptocurrencies';
import  CryptoDetails  from './components/CryptoDetails';
import  News  from './components/News';
import 'antd/dist/reset.css';
import './App.css';
// import 'antd/dist/reset.css';
const App = () => {
  return (
    <div className = "app">
        <div className = "navbar">
            <Navbar />
        </div>
        <div className = "Main">
            <Layout>
                <div className = 'routes'>
                    <Routes>
                        <Route exact path = "/" Component={HomePage}>
                        </Route>
                        <Route exact path = "/exchanges" component={Exchanges}>
                        </Route>
                        <Route exact path = "/cryptocurrencies" component={Cryptocurrencies}>
                        </Route>
                        <Route exact path = "/crypto/:coinId" component={CryptoDetails}>
                        </Route>
                        <Route exact path = "/news" component={News}>
                        </Route>
                    </Routes>
                </div>
            </Layout>
            <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2023
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
  )
}
export default App