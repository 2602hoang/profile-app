import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const boxVariants = cva("w-full h-auto", {
  variants: {
    display: {
      flex: "flex",
      block: "block",
      inline: "inline",
      none: "hidden",
      inlineBlock: "inline-block",
    },
    flexDirection: {
      row: "flex-row",
      column: "flex-col",
    },
    overflow: {
      auto: "overflow-auto",
      hidden: "overflow-hidden",
      scroll: "overflow-scroll",
      visible: "overflow-visible",
      clip: "overflow-clip",
    },
    justify: {
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    align: {
      center: "items-center",
      start: "items-start",
      end: "items-end",
    },
    position: {
      relative: "relative",
      absolute: "absolute",
      fixed: "fixed",
      sticky: "sticky",
    },
  },
});
export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxVariants> {
  asChild?: boolean;
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      asChild = false,
      className,
      display,
      flexDirection,
      overflow,
      justify,
      align,
      position,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn(
          boxVariants({
            display,
            flexDirection,
            overflow,
            justify,
            align,
            position,
            className,
          })
        )}
        {...props}
      />
    );
  }
);

Box.displayName = "Box";

export { Box, boxVariants };
