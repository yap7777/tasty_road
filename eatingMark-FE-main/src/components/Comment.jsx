import React from 'react';

function Comment({ name, comment, rating, profileImage }) {
  return (
    <div className="comment">
      <img src={profileImage} alt={`${name}의 프로필`} />
      <p>
        <strong>{name}</strong>
      </p>
      <p>{comment}</p>
      <p>⭐️ {rating}점</p>
    </div>
  );
}

export default Comment;
