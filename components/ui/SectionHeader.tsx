interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-16 ${centered ? "text-center" : ""} ${className}`}
    >
      {subtitle && (
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="font-serif text-4xl mb-4">{title}</h2>
      {!centered && <div className="w-15 h-1 bg-accent rounded-full mb-6" />}
      {description && (
        <p className="text-text-secondary text-lg max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
