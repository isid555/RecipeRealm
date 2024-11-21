import React, { useState, useEffect } from 'react';

// Custom hook for debouncing
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Create a handler to update the debounced value
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup the timeout if value changes
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

const Input = ({ value, onChange, debounceTime = 900 }) => {
    const [inputValue, setInputValue] = useState(value);
    const debouncedValue = useDebounce(inputValue, debounceTime);

    // Trigger onChange only when debounced value changes
    useEffect(() => {
        onChange(debouncedValue);
    }, [debouncedValue, onChange]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-lg mb-6"
        />
    );
};

export default Input;