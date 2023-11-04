import './CreateCrewPage.css';
import { supabase } from '../client.js';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditCrew = () =>{

    const { id } = useParams();
    const navigateTo = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        speed: '',
        color: ''
    });

    useEffect(() => {
        const fetchCrewData = async () => {
            try {
                const { data, error } = await supabase
                    .from('crewInfo')
                    .select()
                    .eq('id', id);

                if (error) {
                    console.error('Error fetching crew data:', error);
                } else if (data && data.length > 0) {
                    const crewMember = data[0];
                    setFormData({
                        name: crewMember.name,
                        speed: crewMember.speed,
                        color: crewMember.color,
                    });
                }
            } catch (error) {
                console.error('Error fetching crew data:', error);
            }
        };

        fetchCrewData();
    }, [id]);

    const handleChange = (event) =>{
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleColorChange = (event) =>{
        const value = event.target.value;
        setFormData({
            ...formData,
            color: value
        });
    };

    const updateCrew = async (event) =>{
        event.preventDefault();

        try {
            const { data, error } = await supabase
                .from('crewInfo')
                .update(formData)
                .eq('id', id);

            if (error) {
                console.error('Error updating crew member:', error);
            } else {
                console.log('Crew member updated successfully:', data);
            }
        } catch (error) {
            console.error('Error updating crew member:', error);
        }

        navigateTo('/crewList');
    };


    return(
        <div>
            <h1>Update The Crewmate {id}</h1>
            <form className='form-container'>
                <div className='label-container'>
                    <label>
                        Name:
                        <input type="text" name='name' placeholder='Enter the name' value={formData.name} onChange={handleChange} />
                    </label>
                </div>
                <div className='label-container'>
                    <label>
                        Speed (mph):
                        <input type="text" placeholder='Enter the speed' name='speed' value={formData.speed} onChange={handleChange} />
                    </label>
                </div>
                <div className='label-container'>
                    <label>
                        Red
                        <input id="Red" name='color' type='radio' value='Red' checked={formData.color === 'Red'} onChange={handleColorChange} />
                    </label>
                    <label>
                        Green
                        <input id="Green" name='color' type='radio' value='Green' checked={formData.color === 'Green'} onChange={handleColorChange} />
                    </label>
                    <label>
                        Blue
                        <input id="Blue" name='color' type='radio' value='Blue' checked={formData.color === 'Blue'} onChange={handleColorChange} />
                    </label>
                    <label>
                        Purple
                        <input id="Purple" name='color' type='radio' value='Purple' checked={formData.color === 'Purple'} onChange={handleColorChange} />
                    </label>
                    <label>
                        Yellow
                        <input id="Yellow" name='color' type='radio' value='Yellow' checked={formData.color === 'Yellow'} onChange={handleColorChange} />
                    </label>
                    <label>
                        Orange
                        <input id="Orange" name='color' type='radio' value='Orange' checked={formData.color === 'Orange'} onChange={handleColorChange} />
                    </label>
                    <label>
                        Pink
                        <input id="Pink" name='color' type='radio' value='Pink' checked={formData.color === 'Pink'} onChange={handleColorChange} />
                    </label>
                    <label>
                        Rainbow
                        <input id="Rainbow" name='color' type='radio' value='Rainbow' checked={formData.color === 'Rainbow'} onChange={handleColorChange} />
                    </label>
                </div>
                <input type='submit' onClick={updateCrew} />
            </form>
        </div>
    )
}

export default EditCrew;