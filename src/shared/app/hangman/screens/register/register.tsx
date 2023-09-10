import { useState } from 'react';

const avatars = [
  'avatar1.png',
  'avatar2.png',
  'avatar3.png',
  'avatar4.png',
  'avatar5.png',
];


type OnRegisterFunction = (data: { name: string; avatar: string }) => void;

const Register = ({ onRegister }: { onRegister: OnRegisterFunction }) => {
  const [name, setName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);

  const handleRegister = () => {
    if (name.trim() === '') {
      alert('Por favor, insira um nome válido.');
      return;
    }

    onRegister({ name, avatar: selectedAvatar });
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
        <label>Escolha um Avatar:</label>
        <div className="avatar-list">
          {avatars.map((avatar) => (
            <img
              key={avatar}
              src={avatar}
              alt={avatar}
              className={selectedAvatar === avatar ? 'selected' : ''}
              onClick={() => setSelectedAvatar(avatar)}
            />
          ))}
        </div>
      </div>
      <button onClick={handleRegister}>Registrar</button>
    </div>
  );
};

export default Register;
