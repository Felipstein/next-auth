import { w } from "@/utils/w";
import { Slot } from "@radix-ui/react-slot";
import { ButtonProps } from ".";
import { ButtonIcon } from "./ButtonIcon";

export function ButtonServerSide({
  defaultShadow = true,
  asChild = false,
  className,
  children,
  variant,
  ...props
}: Omit<ButtonProps, 'loading'>) {

  const Comp = asChild ? Slot : 'button';

  return (
    // @ts-expect-error dif between ref Slot and ref button
    <Comp
      className={w(
        "relative w-full flex gap-2 items-center justify-center font-medium text-sm rounded-md px-4 py-2.5",
        {
          "shadow shadow-sky-100 hover:shadow-sky-200": defaultShadow,
          "pointer-events-none opacity-20 bg-zinc-700 text-zinc-300": props.disabled,
          "text-white bg-sky-500 hover:bg-sky-600": variant === 'main',
          "text-sky-500 hover:text-sky-600 shadow-none px-3 py-2": variant === 'no-bg',
        },
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

ButtonServerSide.Icon = ButtonIcon;