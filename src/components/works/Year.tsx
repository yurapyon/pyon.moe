import type { ParentComponent } from 'solid-js';

interface YearProps {
  year: number;
}

export const Year: ParentComponent<YearProps> = (props) => {
  return (
    <div class="flex flex-col gap-2">
      <div class="bg-lmn-slate text-white px-3 py-0.5 shadow-md font-serif text-lg">
        {props.year}
      </div>
      {props.children}
    </div>
  );
};
