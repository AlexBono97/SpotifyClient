import React from "react";
import { Card, Table, Image } from "react-bootstrap";
import _ from "lodash";
import music from "../images/music.jpeg";

const TracksList = ({ tracks }) => {
  const msToPlayMinutes = (ms) => {
    return new Date(ms).toISOString().slice(14, -5);
  };

  const renderSongs = (track, index) => {
    return (
      <tr key={index}>
        <td>
          {!_.isEmpty(track.album.images) ? (
            <Image
              heigh="90"
              width="90"
              variant="top"
              src={track.album.images[0].url}
              alt=""
            />
          ) : (
            <img src={music} alt="" />
          )}
        </td>
        <td>{track.name}</td>
        <td>{track.album.name}</td>
        <td>{msToPlayMinutes(track.duration_ms)}</td>
        <td>button</td>
      </tr>
    );
  };

  return (
    <React.Fragment>
      {Object.keys(tracks).length > 0 && (
        <div className="tracks">
              <React.Fragment>
                <Table responsive stripped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Song</th>
                      <th>Album</th>
                      <th>Duration</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {tracks.items.map(renderSongs)}
                  </tbody>
                </Table>
              </React.Fragment>
        </div>
      )}
    </React.Fragment>
  );
};
export default TracksList;

/*
<tr>
                      <td>
                        {!_.isEmpty(track.album.images) ? (
                          <Image heigh="90" width="90"
                            variant="top"
                            src={track.album.images[0].url}
                            alt=""
                          />
                        ) : (
                          <img src={music} alt="" />
                        )}
                      </td>
                      <td>{track.name}</td>
                      <td>{track.album.name}</td>
                      <td>{msToPlayMinutes(track.duration_ms)}</td>
                      <td>button</td>
                    </tr>
*/
