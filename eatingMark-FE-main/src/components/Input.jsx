import React from 'react';

function Input({ input, setInput, label, placeholder, type }) {
  return (
    <div className="w-full max-w-md">
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={input}
        onChange={e => setInput(e.target.value)}
        className="w-full bg-white rounded-md px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
    </div>
  );
}

export default Input;
