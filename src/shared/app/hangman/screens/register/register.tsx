import { useState } from 'react';

type OnRegisterFunction = (data: { name: string; color: string }) => void;

type RegisterProps = {
  onRegister: OnRegisterFunction;
  onReturn: () => void;
};

const Register = ({ onRegister, onReturn }: RegisterProps) => {
  const [name, setName] = useState('');
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#33FFFF', '#FF33F2'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  

  const handleRegister = () => {
    if (name.trim() === '') {
      alert('Por favor, insira um nome válido.');
      return;
    }

    const newUser = { name, color: randomColor };
    onRegister(newUser);

    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <div>
      <h1>Tela de Registro</h1>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleRegister}>Registrar</button>
        <button onClick={onReturn}>Voltar para a Tela Inicial</button>
      </div>
    </div>
  );
};

export default Register;
