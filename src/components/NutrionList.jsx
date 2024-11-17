import React from 'react';

const NutritionList = ({ nutritionData }) => {
    if (!nutritionData)
        return <div style={{ textAlign: 'center', color: '#fff', fontSize: '18px', marginTop: '20px' }}>No nutrition information available</div>;

    const { nutrients, properties, flavonoids, caloricBreakdown, weightPerServing } = nutritionData;

    return (
        <div style={{ backgroundColor: '#1a632e', padding: '20px', borderRadius: '8px', color: '#fff', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', color: '#fff', marginBottom: '20px' }}>Nutrition Information</h2>

            {weightPerServing && (
                <div style={{ marginBottom: '20px', backgroundColor: '#2c8a3f', padding: '10px', borderRadius: '6px' }}>
                    <h3 style={{ margin: '0 0 10px 0', color: '#fff' }}>Weight per serving:</h3>
                    <p style={{ margin: 0, color: '#d3d3d3' }}>
                        {weightPerServing.amount} {weightPerServing.unit}
                    </p>
                </div>
            )}

            {nutrients && nutrients.length > 0 && (
                <div style={{ marginBottom: '20px', backgroundColor: '#2c8a3f', padding: '10px', borderRadius: '6px' }}>
                    <h3 style={{ margin: '0 0 10px 0', color: '#fff' }}>Nutrients:</h3>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {nutrients.map((item, index) => (
                            <li key={index} style={{ marginBottom: '10px', color: '#d3d3d3' }}>
                                <strong style={{ color: '#fff' }}>{item.name}:</strong> {item.amount} {item.unit} (Daily Needs: {item.percentOfDailyNeeds}%)
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {properties && properties.length > 0 && (
                <div style={{ marginBottom: '20px', backgroundColor: '#2c8a3f', padding: '10px', borderRadius: '6px' }}>
                    <h3 style={{ margin: '0 0 10px 0', color: '#fff' }}>Properties:</h3>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {properties.map((item, index) => (
                            <li key={index} style={{ marginBottom: '10px', color: '#d3d3d3' }}>
                                <strong style={{ color: '#fff' }}>{item.name}:</strong> {item.amount} {item.unit}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {flavonoids && flavonoids.length > 0 && (
                <div style={{ marginBottom: '20px', backgroundColor: '#2c8a3f', padding: '10px', borderRadius: '6px' }}>
                    <h3 style={{ margin: '0 0 10px 0', color: '#fff' }}>Flavonoids:</h3>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {flavonoids.map((item, index) => (
                            <li key={index} style={{ marginBottom: '10px', color: '#d3d3d3' }}>
                                <strong style={{ color: '#fff' }}>{item.name}:</strong> {item.amount} {item.unit}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {caloricBreakdown && (
                <div style={{ marginBottom: '20px', backgroundColor: '#2c8a3f', padding: '10px', borderRadius: '6px' }}>
                    <h3 style={{ margin: '0 0 10px 0', color: '#fff' }}>Caloric Breakdown:</h3>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '10px', color: '#d3d3d3' }}>
                            <strong style={{ color: '#fff' }}>Protein:</strong> {caloricBreakdown.percentProtein}%
                        </li>
                        <li style={{ marginBottom: '10px', color: '#d3d3d3' }}>
                            <strong style={{ color: '#fff' }}>Fat:</strong> {caloricBreakdown.percentFat}%
                        </li>
                        <li style={{ marginBottom: '10px', color: '#d3d3d3' }}>
                            <strong style={{ color: '#fff' }}>Carbs:</strong> {caloricBreakdown.percentCarbs}%
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NutritionList;
