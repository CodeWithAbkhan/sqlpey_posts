interface LogoProps {
  size: "small" | "medium" | "large";
}
const Logo = ({ size }: LogoProps) => {
  return (
    <div
      className={`
    font-bold text-neutral-900
    ${
      size === "small"
        ? "text-base"
        : size === "medium"
        ? "text-2xl"
        : "text-4xl"
    }
  
    `}
    >
      sqlpey
    </div>
  );
};

export default Logo;
