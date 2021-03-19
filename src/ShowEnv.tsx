import { FC } from "react";

const ShowEnv: FC = () => {
  const { MODE, VITE_ENV_PARAM } = import.meta.env;

  return (
    <div>
      <div>MODE: {MODE}</div>
      <div>VITE_ENV_PARAM: {VITE_ENV_PARAM}</div>
    </div>
  );
};

export default ShowEnv;
