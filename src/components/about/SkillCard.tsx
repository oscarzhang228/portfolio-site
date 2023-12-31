import { ReactElement } from "react";

export const SkillCard = ({
  header,
  image,
  body,
}: {
  header: string;
  image: string;
  body: ReactElement;
}) => {
  return (
    <div className="skill-card col-sm-5 col-md-5 col-lg-4 d-flex justify-content-center">
      <div className="main">
        <img className="token-image" src={image} alt="Javascript" />
        <h2 className="heading-text mb-0 text-center mt-3">{header}</h2>
        {body}
      </div>
    </div>
  );
};
