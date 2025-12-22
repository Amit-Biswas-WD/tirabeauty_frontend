import Link from "next/link";
import { JSX } from "react";

const TopBar = (): JSX.Element => {
  return (
    <section className="hidden lg:block">
      <div className="flex items-center justify-end gap-2 my-2 xl:mx-10 mx-0 text-xs">
        <Link href="/order-track">Order Track</Link>

        <span className="h-3 border-l border-black/50" />

        <Link href="/help-centre">Help Centre</Link>
      </div>
    </section>
  );
};

export default TopBar;
