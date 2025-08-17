// components/Logo.tsx

import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo2.png"
        alt="SBM Traders Logo"
        width={200}
        height={200}
        priority
      />
    </Link>
  );
};
