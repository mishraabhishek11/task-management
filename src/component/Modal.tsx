import React, { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

function Modal({ children, ref }: any) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        if (dialogRef.current) dialogRef.current?.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialogRef}
      className="backdrop:bg-stone-900/90 px-32 py-6 rounded-md shadow-md text-center"
    >
      {children}
      <form className="mb-4" method="dialog">
        <Button>Close</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
}

export default Modal;
