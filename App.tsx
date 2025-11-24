
import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import LoginScreen from './components/LoginScreen';
import { AuthProvider, useAuth } from './contexts/AuthContext';

const AppContent: React.FC = () => {
  const { currentUser } = useAuth();
  const [installPromptEvent, setInstallPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPromptEvent(event as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Limpa o evento se o app for instalado
    const handleAppInstalled = () => {
      setInstallPromptEvent(null);
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const registerSW = () => {
        // A robust way to construct the service worker URL to avoid cross-origin issues in sandboxed environments.
        const swPath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1) + 'sw.js';
        const swUrl = new URL(swPath, window.location.origin).href;

        navigator.serviceWorker.register(swUrl)
          .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch(err => {
            // Em ambientes de desenvolvimento ou iframes, o SW pode falhar. Logamos como aviso.
            console.warn('Falha no registro do Service Worker (pode ser ignorado em ambiente de desenvolvimento):', err);
          });
      };

      if (document.readyState === 'complete') {
        registerSW();
      } else {
        window.addEventListener('load', registerSW);
        return () => window.removeEventListener('load', registerSW);
      }
    }
  }, []);

  if (!currentUser) {
    return <LoginScreen />;
  }

  return (
    <div className="font-sans">
      <Dashboard 
        installPromptEvent={installPromptEvent} 
        onInstallSuccess={() => setInstallPromptEvent(null)}
      />
    </div>
  );
}

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
