import profilePic from "../../public/Dark Art Illustrations.jpeg";
import Image from "next/image";
export const ProfilePic = () => {
  return (
    <div className="size-fit border-2 border-gray-500 rounded-full overflow-hidden">
      <Image className="w-3xs" src={profilePic} alt="Profile Picture" />
    </div>
  );
};
