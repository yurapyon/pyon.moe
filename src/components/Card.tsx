import type { ParentComponent } from 'solid-js';

export const Card: ParentComponent = (props) => {
  return (
    <div class="shadow-md bg-white font-sans text-sm sm:text-base p-[6px]">
      <div class="border-[3px] border-lmn-slate">
        {props.children}
      </div>
    </div>
  );
}
