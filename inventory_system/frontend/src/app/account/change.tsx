"use client";

import { useState } from "react";

interface ChangeProps {
  onClose: () => void;
}

const Change = ({ onClose }: ChangeProps) => {
  const [newName, setNewName] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const isSubmitDisabled = newName.length <= 5 || newPassword.length <= 5;

  const handleSubmit = async () => {
    const data = {
        user: newName,
        password: newPassword
    };

    try {
        const response = await fetch("http://127.0.0.1:3125/api/x", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log("Dados alterados com sucesso!")
            window.alert("Dados alterados com sucesso!")

        } else {
            console.error("Erro ao alterar o cadastro!");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
    onClose();
};

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-md">
        <h2 className="text-2xl mb-4">Alterar Nome e Senha</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Novo Nome</label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            maxLength={20}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Nova Senha</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            maxLength={20}
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitDisabled}
            className={`px-4 py-2 rounded-md text-white ${isSubmitDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
          >
            Submeter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Change;