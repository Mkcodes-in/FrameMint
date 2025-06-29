import {
  GaugeCircle,
  Accessibility,
  ThumbsUp,
  SearchCheck,
} from "lucide-react";
import AuditCard from "./components/AuditCard";

export default function AuditGrid() {
  return (
    <div className="bg-[#2C2C35] p-6 rounded-xl flex justify-between gap-4">
      <AuditCard label="Performance" score={97} status="pass" icon={GaugeCircle} />
      <AuditCard label="Accessibility" score={45} status="warning" icon={Accessibility} />
      <AuditCard label="Best practices" score={20} status="fail" icon={ThumbsUp} />
      <AuditCard label="SEO" score={92} status="pass" icon={SearchCheck} />
    </div>
  );
}
