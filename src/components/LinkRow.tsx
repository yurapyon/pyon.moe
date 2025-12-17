import type { ButtonProps } from "./Button";
import { Button } from "./Button";

interface LinkRowProps {
  buttons: ButtonProps[];
}

export const LinkRow: Component<LinkRowProps> = (props) => {
  return (
    <div class="flex flex-row font-mono">
      <Index each={props.buttons}>
        {(item) => {
          return <Button
            text={item().text}
            href={item().href}
            target={item().target}
            deactivated={item().deactivated}
            class={[
              "flex-1",
              item().class
            ].join(" ")}
          />
        }}
      </Index>
    </div>
  );
}
