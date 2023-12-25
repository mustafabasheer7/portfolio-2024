const Social = ({ link, children }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="cursor-pointer text-gray-100 hover:text-gray-200 transition duration-200 ease-in-out hover:scale-110"
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Social;
