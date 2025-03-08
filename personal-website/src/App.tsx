import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Layout from './components/Layout';
import './App.css'


const App: React.FC = () => (
    <BrowserRouter> 
      <Layout>
        <Routes>
          <Route>
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );

export default App
