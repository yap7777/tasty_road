import { useNavigate } from 'react-router-dom';
import Card from './Card';

function CardList({ places }) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {places.map(place => (
        <Card
          key={place.id}
          imageSrc={`http://localhost:3000/${place.image.src}`}
          name={place.title}
          handleCardClick={() => {
            navigate(`/detail/${place.id}`);
          }}
        />
      ))}
    </div>
  );
}

export default CardList;
