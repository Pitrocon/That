import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type PillVariant = "primary" | "light" | "outline";
type PillSize = "sm" | "md" | "lg";

const VARIANT_CLASSES: Record<PillVariant, string> = {
  primary:
    "bg-apple-blue text-white hover:bg-apple-blueHover border border-transparent shadow-sm",
  light:
    "bg-titanium text-black hover:bg-white border border-transparent",
  outline:
    "bg-white/[0.04] text-titanium border border-white/20 hover:bg-white/[0.10] hover:border-white/35",
};

const SIZE_CLASSES: Record<PillSize, string> = {
  sm: "min-h-[44px] px-4 py-2 text-xs font-medium",
  md: "min-h-[44px] px-6 py-2.5 text-sm font-medium",
  lg: "min-h-[48px] px-7 py-3 text-sm font-semibold",
};

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-link focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50";

interface BasePillProps {
  children: ReactNode;
  variant?: PillVariant;
  size?: PillSize;
  className?: string;
}

type PillLinkProps = BasePillProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type PillActionButtonProps = BasePillProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type PillButtonProps = PillLinkProps | PillActionButtonProps;

export function PillButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: PillButtonProps) {
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`.trim();

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorProps } = rest;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={buttonProps.type ?? "button"} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
