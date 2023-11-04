import './App.css'
import { useRoutes, Routes, Route } from 'react-router-dom';
import { supabase } from './client'
import SideMenu from './components/SideMenu'
import HomePage from './components/HomePage';
import CreateCrew from './components/CreateCrewPage';
import CrewList from './components/CrewListPage';
import EditCrew from './components/EditCrewPage';

function App() {

  return (
    <div className='App'>
      <div className='content-container'>
        <SideMenu />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createCrew" element={<CreateCrew />} />
        <Route path="/crewList" element={<CrewList />} />
        <Route path="/updateCrew/:id" element={<EditCrew />} />
      </Routes>
    </div>
  )
}

export default App
