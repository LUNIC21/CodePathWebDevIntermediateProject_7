import './CrewListPage.css';
import { supabase } from '../client.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import amongUsChar from '../assets/among-us-char.jpg'
import EditCrew from './EditCrewPage'

const CrewList = () =>{
    const [crewList, setCrewList] = useState([]);

    useEffect(() =>{
        const getCrewData = async () =>{
            try{
                const{data, error} = await supabase
                    .from('crewInfo')
                    .select();
                
                if(error){
                    console.error('Error fetching crew data:', error);
                }else{
                    setCrewList(data);
                }
            } catch(error){
                console.error('Error fetching crew data:', error);
            }
        }

        getCrewData();
    },[]);

    const handleDelete = async (crewId) => {
        try{
            const { data, error } = await supabase
                .from('crewInfo')
                .delete()
                .eq('id', crewId);
            
                if (error) {
                    console.error('Error deleting crew member:', error);
                } else {
                    setCrewList(crewList.filter((crew) => crew.id !== crewId));
                    console.log('Crew member deleted successfully:', data);
                }
            } catch (error) {
                console.error('Error deleting crew member:', error);
            }
        };

    console.log(crewList);

    return(
        <div className='list-container'>
            <h1>List of added crewmates</h1>
            <div className="crew-list">
                {crewList.length > 0 ? (
                    crewList.map((crew) => (
                        <div key={crew.id} className="crew-item">
                            <img src={amongUsChar} alt="Among Us Character" />
                            <p>Name: {crew.name}</p>
                            <p>Speed: {crew.speed}</p>
                            <p>Color: {crew.color}</p>
                            <Link to={`/updateCrew/${crew.id}`} className='options'>Edit</Link>
                            <button className='options' onClick={() => handleDelete(crew.id)} >Delete</button>
                        </div>
                    ))
                ) : (
                    <p>The list is empty</p>
                )}
            </div>
        </div>
    )
}

export default CrewList;