import classes from './Cusine.module.css';

const Cusine = ({ cusine }) => {
  return (
    <div
      style={{ backgroundImage: `url(${cusine.PicURL})` }}
      className={`bg-cover bg-no-repeat text-white relative ${classes.cusine}`}
    >
      <div className="absolute top-0 left-0 p-1 bg-yellow-500">
        {cusine.City}
      </div>
      <div className="absolute bottom-0 left-0 p-1">
        <div className="italic text-sm">{cusine.Town}</div>
        <div>{cusine.Name}</div>
      </div>
    </div>
  );
};

export default Cusine;
