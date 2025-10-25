import Link from "next/link";

export const Topbar = () => {
  return (
    <div className="flex items-center justify-end gap-2 my-2 mx-10 text-xs">
      <Link href="#">Order Track</Link>
      <div className="h-3 border border-black/50"></div>
      <Link href="#">Help Centre</Link>
    </div>
  );
};
