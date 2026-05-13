import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  children,
  type = "button",
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 ease-out";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm min-h-10",
    md: "px-8 py-3 text-base min-h-11",
    lg: "px-10 py-4 text-lg min-h-12",
  };

  const variantStyles = {
    primary:
      "bg-accent text-white hover:bg-accent-hover hover:shadow-md active:scale-95",
    secondary:
      "border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors",
    dark: "bg-brand-900 text-white hover:bg-text-primary hover:shadow-md active:scale-95",
  };

  const fullWidthClass = fullWidth ? "w-full" : "";

  const buttonClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidthClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
    >
      {children}
    </button>
  );
}
