export interface ButtonProps {
  text: string;
  href: string;
  target?: string;
  class?: string;
  deactivated?: bool;
}

export const Button: Component<ButtonProps> = (props) => {
  return (
    <a
      class={[
        "px-1.5 py-1 text-center text-lmn-slate bg-white",
        props.deactivated
          ? "font-bold bg-lmn-slate text-white pointer-events-none cursor-default"
          : "",
        props.class,
      ].join(" ")}
      href={props.href}
      target={props.target || ""}
    >
      {props.text}
    </a>
  );
};
