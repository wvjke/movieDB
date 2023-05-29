/* eslint-disable react/prop-types */
const Actors = ({ credits }) => {
  const setCredits = () => {
    const view = [];
    for (let i = 0; i < 3; i++) {
      view.push(
        <div className="actor" key={i}>
          <div className="actor_img">
            <img
              src={`https://image.tmdb.org/t/p/w200${credits[i].profile_path}`}
              alt="actor"
            />
          </div>
          <div className="actor_name">{credits[i].name}</div>
          <div className="actor_character">{credits[i].character}</div>
        </div>
      );
    }
    return view;
  };

  const view = setCredits();

  return <>{view}</>;
};

export default Actors;
