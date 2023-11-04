import './CreateCrewPage.css';
import { supabase } from '../client.js';
import { useState } from 'react';

const CreateCrew = () =>{

    const [formData, setFormData] = useState({
        name: '',
        speed: '',
        color: ''
    });

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

    const addNewCrew = async (event) =>{
        event.preventDefault();

        try {
            const { data, error } = await supabase
                .from('crewInfo')
                .insert([
                    {
                        name: formData.name,
                        speed: formData.speed,
                        color: formData.color
                    }
                ]);
            
            if (error) {
                console.error('Error inserting data:', error);
            } else {
                console.log('Data inserted successfully:', data);
            }
        } catch (error) {
            console.error('Error inserting data:', error);
        }

        setFormData({
            name: '',
            speed: '',
            color: ''
        })
    }

    return(
        <div>
            <h1>Create a New Crewmate</h1>
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
                <input type='submit' onClick={addNewCrew} />
            </form>
        </div>
    )
}

export default CreateCrew;