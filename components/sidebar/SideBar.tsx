import InfoCard from "./InfoCard";
import { InfoItem } from "@/types/info";

interface SidebarProps {
  info: InfoItem[];
}

export default function Sidebar({ info }: SidebarProps) {
  return (
    <div className="flex flex-col gap-6">
      <InfoCard info={info} />
    </div>
  );
}