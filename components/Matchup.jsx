import React from 'react';

export default ({props}) => (
  <div className="MatchupDisplay col-lg-4 col-md-6">
    <div className="row">
      <div className="col-6">
        <div className="p-2">
          <img
            src={props.home_logo}
            className="img-fluid"
          />
        </div>
        <h2 className="text-center">{props.home_team}</h2>
        <h4 className="text-center">{props.home_mascot}</h4>
      </div>
      <div className="col-6">
        <div className="p-2">
          <img
            src={props.away_logo}
            className="img-fluid"
          />
        </div>
        <h2 className="text-center">{props.away_team}</h2>
        <h4 className="text-center">{props.away_mascot}</h4>
      </div>
    </div>
    <div className="row">
      <button className="col-3 text-center btn">
        <div className="material-icons-outlined fs-1">query_stats</div>
        <div className="fs-6">Stats</div>
      </button>
      <button className="col-3 text-center btn">
        <div className="material-icons-outlined fs-1">edit_note</div>
        <div className="fs-6">Notes</div>
      </button>
      <button className="col-3 text-center btn">
        <div className="material-icons-outlined fs-1">forum</div>
        <div className="fs-6">Discuss</div>
      </button>
      <button className="col-3 text-center btn">
        <div className="material-icons-outlined fs-1">visibility</div>
        <div className="fs-6">Follow</div>
      </button>
    </div>
  </div>
);