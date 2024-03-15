import React from 'react'
import { useState } from 'react';

import './Userdata.css'
function Userdata() {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        gender: '',
        skills: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
          ...userData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
      };



  return (
    <div className='formdata'>
      <form onSubmit={handleSubmit}>
      <h2>User Data</h2>
          <label>
            Username:
            <input type="text" name="username" value={userData.username} onChange={handleChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" value={userData.password} onChange={handleChange} />
          </label>
          <br />
          <label>
            Gender:
            <label>
              <input type="radio" name="gender" value="male" checked={userData.gender === 'male'} onChange={handleChange} />
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" checked={userData.gender === 'female'} onChange={handleChange} />
              Female
            </label>
          </label>
          <br />
          <label>
            Skills:
            <select name="skills" value={userData.skills} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="JS">JS</option>
              <option value="React">React</option>
              <option value="API">API</option>
              <option value="Backend">Backend</option>
            </select>
          </label>
          <br />
          <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Userdata
