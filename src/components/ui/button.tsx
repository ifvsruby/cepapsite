import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "accent";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // We handle styles with a combination of base classes and variant/size
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]"
    
    const variants = {
      default: "bg-cepap-primary text-white hover:bg-cepap-deep",
      outline: "border-2 border-cepap-primary text-cepap-primary hover:bg-cepap-primary hover:text-white",
      ghost: "hover:bg-cepap-mist text-cepap-graphite",
      link: "text-cepap-primary underline-offset-4 hover:underline",
      accent: "bg-cepap-accent-1 text-cepap-deep hover:bg-cepap-accent-2"
    }
    
    const sizes = {
      default: "h-11 px-6 py-2",
      sm: "h-9 px-4",
      lg: "h-12 px-8 text-base",
      icon: "h-10 w-10",
    }
    
    return (
      <Comp
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
