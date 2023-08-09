import React, { useState } from 'react';

function CreateUserForm({ addUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = { name, email, phone };
    addUser(newUser);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New User</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} />
      </label>
      <button type="submit">Create</button>
    </form>
  );
}

export default CreateUserForm;
