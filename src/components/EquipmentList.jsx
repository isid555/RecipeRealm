import React from 'react';

const EquipmentList = ({ equipment }) => {
    if (!equipment || equipment.length === 0) return <div>No equipment available</div>;

    return (
        <div>
            <h2>Equipment:</h2>
            <ul>
                {equipment.map((item, index) => (
                    <li key={index} style={{ marginBottom: '20px' }}>
                        <img
                            src={`https://spoonacular.com/cdn/equipments_100x100/${item.image}`}
                            alt={item.name}
                            style={{ width: '50px', height: '50px', marginRight: '10px' }}
                        />
                        <strong>{item.name}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EquipmentList;
