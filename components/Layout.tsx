import React, { FC } from 'react';
import Navbar from './Navbar';

const Layout: FC = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
  </>
);

export default Layout;
