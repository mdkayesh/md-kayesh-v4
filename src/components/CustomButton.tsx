import { cn } from "@/lib/utils";
import MagnetEffect from "./MagnetEffect";
import { Button, ButtonProps } from "./ui/button";

interface CustomButtonProps extends ButtonProps {
  btnContainerClass?: string;
  hoverBgClass?: string;
}

const CustomButton = ({
  className,
  hoverBgClass,
  btnContainerClass,
  children,
  ...rest
}: CustomButtonProps) => {
  return (
    <MagnetEffect
      className={cn(
        "relative overflow-hidden group rounded-full w-fit h-fit bg-foreground text-background dark:bg-transparent dark:text-foreground border border-gray-600 hover:text-white",
        btnContainerClass
      )}
    >
      <MagnetEffect className="relative z-10">
        <Button className={className} {...rest}>
          {children}
        </Button>
      </MagnetEffect>
      <div
        className={cn(
          "absolute left-0 top-0 w-full h-full rounded-full scale-y-0 scale-x-100 origin-[0%_0%] group-hover:scale-y-100 group-hover:origin-[100%_100%] transition-transform duration-500 select-none bg-primary",
          hoverBgClass
        )}
      ></div>
    </MagnetEffect>
  );
};

export default CustomButton;
