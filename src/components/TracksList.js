import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';

const TracksList = ({ tracks }) => {

  const msToPlayMinutes = (ms) => {
    return new Date(ms).toISOString().slice(14, -5);
}

  return (
    <React.Fragment>
      {Object.keys(tracks).length > 0 && (
        <div className="tracks">
          {tracks.items.map((track, index) => {

            return (
              <React.Fragment key={index}>
                <Card style={{ width: '15rem'}}>
                  <a
                    target="_blank"
                    href={track.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    {!_.isEmpty(track.album.images) ? (
                      <Card.Img
                        
                        variant="top"
                        src={track.album.images[0].url}
                        alt=""
                      />
                    ) : (
                      <img src={music} alt="" />
                    )}
                  </a>
                  <Card.Body>
                    <Card.Title>{track.name}</Card.Title>
                    <Card.Text>
                      <small>
                      {"Album: "+track.album.name}
                      </small>
                      <br></br>
                      <small>
                        {"Artists: "+track.artists.map((artist) => artist.name).join(', ')}
                      </small>
                      <br></br>
                      <small>{"Duration: "+msToPlayMinutes(track.duration_ms)}</small>

                    </Card.Text>
                  </Card.Body>
                </Card>
              </React.Fragment>
            );

          })}
        </div>
      )}
    </React.Fragment>
  );
};
export default TracksList;