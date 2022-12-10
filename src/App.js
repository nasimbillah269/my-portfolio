
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Route';

function App() {
  return (
    <div className="max-w-[1280px] mx-auto bg-black">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
