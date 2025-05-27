import React from 'react';
import Comment from '../components/Comment';

function HomePage() {
  return (
    <div>
      <Comment name="윤혜원" comment="맛있어요" />
      <Comment name="강효정" comment="괜찮네요" />
    </div>
  );
}

export default HomePage;
