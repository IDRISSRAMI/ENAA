import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [errorMessages, setErrorMessages] = useState({ email: '', password: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let errors = { email: '', password: '' };

    // Validation des champs
    if (!credentials.email) {
      errors.email = 'L\'email est requis';
      isValid = false;
    }

    if (!credentials.password) {
      errors.password = 'Le mot de passe est requis';
      isValid = false;
    }

    // Si tout est valide
    if (isValid) {
      setSuccessMessage('Connexion réussie !');
      setErrorMessages({ email: '', password: '' });
      console.log('Login attempt with:', credentials);
    } else {
      setErrorMessages(errors);
      setSuccessMessage(''); // Efface le message de succès s'il y a des erreurs
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow-lg">
      <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded"
          />
          {errorMessages.email && (
            <p className="text-red-500 text-sm">{errorMessages.email}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded"
          />
          {errorMessages.password && (
            <p className="text-red-500 text-sm">{errorMessages.password}</p>
          )}
        </div>

        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">
          Login
        </button>

        {successMessage && (
          <p className="text-green-500 text-center mt-4">{successMessage}</p>
        )}

        <p className="text-center text-gray-300 mt-4">
          Vous n'avez pas de compte ?{' '}
          <Link
            to="/register"
            className="underline text-blue-400 hover:text-blue-500 transition duration-300"
          >
            S'inscrire
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
