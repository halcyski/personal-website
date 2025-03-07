import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Layout from './components/Layout';
import viteLogo from '/vite.svg'
import './App.css'

const App: React.FC = () => (
    <BrowserRouter> 
      <Layout>
        <Routes>
          <Route></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );

export default App
