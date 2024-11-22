const Button = ({ content }) => {
  return (
    <div>
      <button
        type="button"
        className="text-black bg-gradient-to-r from-blue-300 via-txtFav-900 to-blue-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg px-7 py-2.5 text-center tracking-widest font-bold text-lg"
      >
        {content}
      </button>
    </div>
  );
};

export default Button;
