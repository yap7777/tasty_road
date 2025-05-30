import React from 'react';

const Comment = ({ name, comment, rating }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-600">👤</span>
          </div>
          <span className="font-semibold text-gray-800">{name}</span>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`text-lg ${
                index < rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
      <p className="text-gray-600">{comment}</p>
      <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
        <button className="hover:text-gray-700">Like</button>
        <button className="hover:text-gray-700">Reply</button>
        <span>about 1 hour ago</span>
      </div>
    </div>
  );
};

export default Comment;
