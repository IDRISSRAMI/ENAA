import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmePassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmePassword: '',
  });

  const [loading, setLoading] = useState(false); // For loading state
  const [successMessage, setSuccessMessage] = useState(''); // For success message
  const [errorMessage, setErrorMessage] = useState(''); // For error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Reset individual error on change
    setErrors({ ...errors, [name]: '' });
    setErrorMessage(''); // Reset the general error message
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Initialize an errors object to keep track of validation errors
    let newErrors = {};

    // Check if all fields are filled
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.phone) newErrors.phone = 'Phone number is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.password) newErrors.password = 'Password is required.';
    if (!formData.confirmePassword) newErrors.confirmePassword = 'Please confirm your password.';

    // Check if password and confirmed password match
    if (formData.password !== formData.confirmePassword) {
      newErrors.confirmePassword = 'Passwords do not match.';
    }

    // If there are errors, set them in the state and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed with the Axios request
    try {
      setLoading(true); // Set loading state to true

      
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);

      // Handle success
      setSuccessMessage('Sign up successful!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmePassword: '',
      }); // Clear the form
    } catch (error) {
      // Handle error
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false); // Set loading state to false after request is complete
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow-lg">
      <h2 className="text-center text-2xl font-bold mb-4">Sign Up</h2>
      {successMessage && <p className="text-center text-green-500 mb-4">{successMessage}</p>}
      {errorMessage && <p className="text-center text-red-500 mb-4">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <div className="mb-4">
          <input
            type="password"
            name="confirmePassword"
            placeholder="Confirm Password"
            value={formData.confirmePassword}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.confirmePassword && <p className="text-red-500 text-sm">{errors.confirmePassword}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded"
          disabled={loading} // Disable the button while loading
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
        <p className="text-center text-gray-300">
          Already have an account?{' '}
          <Link to="/login" className="underline text-blue-400 hover:text-blue-500 transition duration-300">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
