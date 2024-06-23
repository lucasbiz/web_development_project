// ItemList.tsx
import React from 'react';
import ItemCard from './ItemCard';

interface Item {
    id: string;
    name: string;
    description: string;
}

interface ItemListProps {
    items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
    return (
        <div>
            {items.map(item => (
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;
