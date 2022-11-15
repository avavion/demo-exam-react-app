import React from 'react'
import { RouterProvider } from 'react-router-dom';
import router from '../../router/router';
import UserContext from '../../context/UserContext';
import StorageService from '../../services/StorageService';
import HttpService from '../../services/HttpService';

const App = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    if (StorageService.get('_token')) {
      HttpService.appendHeaders({
        "Authorization": `Bearer ${StorageService.get('_token')}`
      });

      setUser(StorageService.get('_token'));
    }
  }, []);

  return (
    <React.Suspense fallback={<h1>Загрузка...</h1>}>
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </React.Suspense>
  );
}

export default App