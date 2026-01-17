import { useState } from 'react';
import './App.css';

const initialFormData = {
  name: '',
  email: '',
  password: '',
  city: '',
  gender: '',
  isMarried: false,
};

function App() {
  const [form, setForm] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input type="text" name="name" value={form.name} onChange={handleChange} />

        <p>Mail</p>
        <input type="email" name="email" value={form.email} onChange={handleChange} />

        <p>Password</p>
        <input type="password" name="password" value={form.password} onChange={handleChange} />

        <br /><br />

        <select name="city" value={form.city} onChange={handleChange}>
          <option value="">Select City</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Surat">Surat</option>
          <option value="Baroda">Baroda</option>
          <option value="Bhavnagar">Bhavnagar</option>
        </select>

        <br /><br />

        <input type="radio" name="gender" value="Male" checked={form.gender === "Male"} onChange={handleChange} />
        <label>Male</label>

        <input type="radio" name="gender" value="Female" checked={form.gender === "Female"} onChange={handleChange} />
        <label>Female</label>

        <br /><br />

        <label>Is Married</label>
        <input type="checkbox" name="isMarried" checked={form.isMarried} onChange={handleChange} />

        <br /><br />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;