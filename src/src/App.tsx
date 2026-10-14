/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { AndroidFrame } from './components/AndroidFrame';
import { HomeScreen } from './components/screens/HomeScreen';
import { ServicesScreen } from './components/screens/ServicesScreen';
import { PackagesScreen } from './components/screens/PackagesScreen';
import { GalleryScreen } from './components/screens/GalleryScreen';
import { BookingScreen } from './components/screens/BookingScreen';
import { BookingsListScreen } from './components/screens/BookingsListScreen';
import { ContactScreen } from './components/screens/ContactScreen';
import { AdminScreen } from './components/screens/AdminScreen';
import { AndroidExportScreen } from './components/screens/AndroidExportScreen';
import { ServiceDetailModal } from './components/modals/ServiceDetailModal';
import { PackageDetailModal } from './components/modals/PackageDetailModal';

const MainAppContent: React.FC = () => {
  const { activeScreen } = useApp();

  const renderActiveScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen />;
      case 'services':
        return <ServicesScreen />;
      case 'packages':
        return <PackagesScreen />;
      case 'gallery':
        return <GalleryScreen />;
      case 'booking':
        return <BookingScreen />;
      case 'in-app-requests':
        return <BookingsListScreen />;
      case 'contact':
        return <ContactScreen />;
      case 'admin':
        return <AdminScreen />;
      case 'android-export':
        return <AndroidExportScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <AndroidFrame>
      <div className="flex flex-col min-h-full bg-[#08080a] text-zinc-100">
        <Header />
        <main className="flex-1 overflow-x-hidden">
          {renderActiveScreen()}
        </main>
        <Navigation />

        {/* Global Modals */}
        <ServiceDetailModal />
        <PackageDetailModal />
      </div>
    </AndroidFrame>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}
