import Inferno from 'inferno';

const Stop = stop =>
  <div className="stop">
      <div className="icon">
        <p>{stop.title}</p>
      </div>
      <div className="contact">
        <div className="address">
          {stop.address}
        </div>
        <div className="city">
            {stop.city}
        </div>
      </div>
      <button className="ui positive basic button addToCrawl">
        Add to crawl
      </button>
  </div>;

export default Stop;
