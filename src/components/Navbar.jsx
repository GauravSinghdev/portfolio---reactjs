import Avatar from "./Avatar";

const Navbar = () => {
  return (
    <header className="p-8">
      <nav className="flex items-center justify-center">
        <div className="bg-primary text-white flex gap-8 rounded-xl w-fit p-2 px-4 items-center">
          <a href="/" className="flex gap-1.5 items-center">
            <Avatar size={"small"} />
            <span className="font-semibold">Gaurav Singh</span>
          </a>
          <a href="/about" className="p-3 hover:bg-secondary hover:rounded-xl">
            About
          </a>
          <a
            href="/projects"
            className="p-3 hover:bg-secondary hover:rounded-xl"
          >
            Projects
          </a>
          <a
            href="/reviews"
            className="p-3 hover:bg-secondary hover:rounded-xl"
          >
            Reviews
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
