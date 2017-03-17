import Inferno from 'inferno';

const Stop = stop =>
  <div className="stop">
      <div className="icon">
      </div>
      <p>{stop.title}</p>
  </div>;

export default Stop;
