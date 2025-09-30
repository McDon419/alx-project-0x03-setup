import { LayoutProps } from "@/interface";

export default function Layout({ children }: LayoutProps) {
  return <div className="layout">{children}</div>;
}
