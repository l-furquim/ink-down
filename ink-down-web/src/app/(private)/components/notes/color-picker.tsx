// components/color-picker.tsx
"use client"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";

const COLORS = [
  "#ef4444", "#f97316", "#eab308", "#22c55e",
  "#3b82f6", "#6366f1", "#a855f7", "#ec4899"
];

export const ColorPicker = ({
  currentColor,
  onColorChange,
}: {
  currentColor: string;
  onColorChange: (color: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className="w-6 h-6 rounded-full border cursor-pointer"
          style={{ backgroundColor: currentColor }}
          onClick={(e) => e.stopPropagation()} // Impede propagação para o menu de contexto
        />
      </PopoverTrigger>
      <PopoverContent 
        className="w-40 p-2 z-[2000]"
        align="end"
        side="right"
        sideOffset={10}
        avoidCollisions={true}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-4 gap-2">
          {COLORS.map((color) => (
            <div
              key={color}
              className="w-6 h-6 rounded-full cursor-pointer hover:scale-110 hover:cursor-pointer transition-transform"
              style={{ backgroundColor: color }}
              onClick={() => {
                onColorChange(color);
                setOpen(false);
              }}
            />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};