import Inferno from 'inferno';
import { Link } from 'inferno-router';

const CrawlTeaser = crawl =>
  <Link className="crawl-teaser" to={`/crawl/${crawl.id}`}>
    <div className="picture">
      <p>{crawl.title}</p>
    </div>
    <div className="contact">
      <div className="address">
        {crawl.address}
      </div>
      <div className="city">
          {crawl.city}
      </div>
    </div>
    <i className="participants users icon">
      10 participants
    </i>
  </Link>;

export default CrawlTeaser;
