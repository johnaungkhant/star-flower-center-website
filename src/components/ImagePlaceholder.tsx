import { ImageIcon } from "lucide-react";

type Props = {
  label: string;
  tint?: "blue" | "green" | "red" | "yellow";
  className?: string;
};

const tints = {
  blue: "from-blue-100 to-blue-50 text-star-blue",
  green: "from-emerald-100 to-emerald-50 text-star-green",
  red: "from-rose-100 to-rose-50 text-star-red",
  yellow: "from-amber-100 to-amber-50 text-star-yellow",
};

// Visual stand-in until real photography is added to /public/images.
export default function ImagePlaceholder({ label, tint = "blue", className = "" }: Props) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center bg-gradient-to-br ${tints[tint]} ${className}`}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <ImageIcon className="h-8 w-8 opacity-70" aria-hidden="true" />
        <span className="text-xs font-semibold opacity-80">{label}</span>
      </div>
    </div>
  );
}
