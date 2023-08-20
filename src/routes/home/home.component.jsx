import { Outlet } from 'react-router-dom';
import Directory from '../../component/directory/directory.component';

const Home = () => {
    
  
    return <>
    <Outlet />
    <Directory  />
    </>;
  };
  
  export default Home;