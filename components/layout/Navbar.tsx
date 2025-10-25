import Image from "next/image";
import { Container } from "../common/Container";

export const Navbar = () => {
  return (
    <Container className="grid grid-cols-2 gap-4">
      <div className="col-span-1 flex items-center">
        <Image
          src="/icons/tira.webp"
          width={55}
          height={24}
          alt="Picture of the author"
        />
      </div>
      <div className=""></div>
    </Container>
  );
};
