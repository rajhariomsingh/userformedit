import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import CreateUserForm from './components/createuserform';
import EditUserForm from './components/edituserform';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  
  const editFormRef = useRef(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setUsers(data))
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const addUser = newUser => {
    setUsers([...users, newUser]);
  };

  const updateUser = updatedUser => {
    setEditingUser(null);
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const deleteUser = userId => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleEditClick = user => {
    
    setEditingUser(null);
    setTimeout(() => {
      setEditingUser(user);
      if (editFormRef.current) {
        editFormRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>User Management Application</h1>
      </header>
      <main className="user-list">
        <ul>
          {users.map(user => (
            <li className={`user-item ${editingUser && editingUser.id === user.id ? 'editing' : ''}`} key={user.id}>
              <div className="user-details">
                <strong>{user.name}</strong> - {user.email} - {user.phone}
              </div>
              <div className="user-actions">
                <button
                  type="button"
                  onClick={() => handleEditClick(user)}
                >
                  Edit
                </button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
        <div ref={editFormRef} className="edit-form">
          {editingUser && (
            <EditUserForm user={editingUser} updateUser={updateUser} />
          )}
        </div>
      </main>
      <footer className="footer">
        <CreateUserForm addUser={addUser} />
      </footer>
    </div>
  );
}

export default App;
