"use client";

import Image from "next/image";

export const ChatNowSection = () => {
  return (
    <div className="w-full overflow-hidden section-spacing !px-0">
      <Image
        src="/images/home/benefit_bar/chat_now.jpg"
        alt="Chat Now"
        width={1440}
        height={180}
        className="w-full h-auto block"
        sizes="100vw"
        priority
      />
    </div>
  );
};
