import React from 'react';
import { dashboardRouteList } from '../../hooks/useRoute'
import { Route, Routes } from 'react-router-dom';
import DahboardLayout from '../../features';

const DashboardRoutes = () => {
  return (
    <DahboardLayout>
      <Routes>{dashboardRouteList.map(item => <Route key={item.id} path={item.path} element={item.element} />)}</Routes>
    </DahboardLayout>
  );
};

export default DashboardRoutes;
