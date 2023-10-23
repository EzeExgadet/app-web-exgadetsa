import { UserCircleIcon } from "@heroicons/react/20/solid";

export default function Navbar()
{
  return (
    <>
      <div className="w-16 h-screen bg-orange-200 fixed">
        <button>
          <UserCircleIcon></UserCircleIcon>
        </button>
      </div>
    </>
  );
}