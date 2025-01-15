import { Link } from "@mui/material";

const Logo = () => {
  return (
    <div className="items-center justify-center gap-4 hidden min-[1300px]:flex">
      <Link href="/">
        <h1 className="font-inter font-bold text-2xl ">DedSec</h1>
      </Link>
    </div>
  );
};

export default Logo;