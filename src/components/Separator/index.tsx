import { SeparatorHr } from "./SeparatorHr";
import { SeparatorLabel } from "./SeparatorLabel";
import { SeparatorRoot } from "./SeparatorRoot";

export interface SeparatorProps {
  label?: string,
}

export function Separator({ label }: SeparatorProps) {
  if(label) {
    return (
      <SeparatorRoot>
        <SeparatorHr />
        <SeparatorLabel>{label}</SeparatorLabel>
        <SeparatorHr />
      </SeparatorRoot>
    );
  }

  return (
    <SeparatorRoot>
      <SeparatorHr />
    </SeparatorRoot>
  );
}

Separator.Root = SeparatorRoot;
Separator.Label = SeparatorLabel;
Separator.Hr = SeparatorHr;