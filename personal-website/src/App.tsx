import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Layout from './components/Layout';
import Home from "./pages/Home"
import './App.css'


const App: React.FC = () => (
    <BrowserRouter> 
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );

export default App
