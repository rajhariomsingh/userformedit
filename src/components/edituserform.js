import React, { useState } from 'react';

function EditUserForm({ user, updateUser }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const handleSubmit = e => {
    e.preventDefault();
    const updatedUser = { id: user.id, name, email, phone };
    updateUser(updatedUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit User</h2>
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
      <button type="submit">Save</button>
    </form>
  );
}

export default EditUserForm;
