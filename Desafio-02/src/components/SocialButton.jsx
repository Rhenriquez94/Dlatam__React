/* eslint-disable react/prop-types */

const SocialButton = ({icon, platform} ) => {
  return (
    <button className="social-button">
      <img src={icon} alt={`${platform} icon`} />
    </button>
  );
};

export default SocialButton