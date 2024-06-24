import React, { useState } from 'react';

interface AddItemModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (name: string, sellPrice: number, buyPrice: number) => void;
}

const AddItemModal: React.FC<AddItemModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [name, setName] = useState('');
    const [sellPrice, setSellPrice] = useState<number | null>(null);
    const [buyPrice, setBuyPrice] = useState<number | null>(null);

    const handleSubmit = () => {
        if (name && sellPrice !== null && buyPrice !== null) {
            onSubmit(name, sellPrice, buyPrice);
            onClose();
        } else {
            alert('Preencha todos os campos');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-10">
            <div className="bg-gray-400 p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-2xl mb-4">Novo Item</h2>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full p-2 mb-4 bg-gray-900 border rounded"
                />
                <input
                    type="number"
                    placeholder="Preço de Venda"
                    value={sellPrice !== null ? sellPrice : ''}
                    onChange={(e) => setSellPrice(Number(e.target.value))}
                    className="block w-full p-2 mb-4 bg-gray-900 border rounded"
                />
                <input
                    type="number"
                    placeholder="Preço de Compra"
                    value={buyPrice !== null ? buyPrice : ''}
                    onChange={(e) => setBuyPrice(Number(e.target.value))}
                    className="block w-full p-2 mb-4 bg-gray-900 border rounded"
                />
                <div className="flex justify-end">
                    <button
                        onClick={handleSubmit}
                        className="p-2 bg-green-500 rounded text-white mr-2"
                    >
                        Adicionar Item
                    </button>
                    <button
                        onClick={onClose}
                        className="p-2 bg-red-500 rounded text-white"
                    >
                        Sair
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddItemModal;
