interface KeyIndicatorProps {
  key: string,
  superKey: "cntrl" | "cmd" | "super"
}

export const KeyIndicator: React.FC<KeyIndicatorProps> = ({ key, superKey }) => {
  return (
    <div className="w-20 rounded-md p-2 h-8 text-sm bg-zinc-300 text-muted-foreground flex items-center justify-between">
      {superKey} + {key}
    </div>
  )
}