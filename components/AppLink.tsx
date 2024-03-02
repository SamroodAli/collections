import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
}

export default function AppLink({ href, children }: Props) {
  return <Link href={href}>{children}</Link>;
}
