import img from "../../Photo.png";

const Avatar = ({ size }) => {
  return (
    <div>
      <img
        className={`${
          size === "big" ? "size-10 rounded-full" : "size-8 rounded-full"
        }`}
        // src="https://cdn.pixabay.com/photo/2022/11/10/20/29/snowman-7583640_640.jpg"
        src={img}
        alt="Bordered avatar"
      />
    </div>
  );
};

export default Avatar;
