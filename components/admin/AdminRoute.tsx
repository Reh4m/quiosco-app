"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";

type AdminRouteProps = {
  link: {
    url: string;
    text: string;
    blank: boolean;
  };
};

export default function AdminRoute({ link }: AdminRouteProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(link.url);

  return (
    <Link
      className={`${
        isActive ? "bg-amber-100" : ""
      } font-semibold text-lg border-t border-gray-200 p-3 last-of-type:border-b`}
      href={link.url}
      target={link.blank ? "_blank" : ""}
    >
      {link.text}
    </Link>
  );
}
