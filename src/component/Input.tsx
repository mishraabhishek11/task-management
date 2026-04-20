import React from "react";

function Input({
  title,
  textarea = false,
  ...props
}:
  | {
      title: string;
      textarea?: boolean;
    }
  | any) {
  return (
    <div className="flex flex-col gap-1 my-4">
      <label className="text-sm text-stone-500 uppercase font-bold">
        {title}
      </label>

      {textarea ? (
        <textarea
          className="w-full p-1 border-b-2 border-stone-300 bg-stone-200 rounded-sm text-stone-600 focus:outline-none focus:border-stone-600"
          {...props}
        />
      ) : (
        <input
          className="w-full p-1 border-b-2 border-stone-300 bg-stone-200 rounded-sm text-stone-600 focus:outline-none focus:border-stone-600"
          {...props}
        />
      )}
    </div>
  );
}

export default Input;
