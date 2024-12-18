import React, { useRef, useCallback } from "react";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { useCallbackFunction } from "../useCallback";
import { ModalProps, BottomModalRef } from "../../types";

export const useBottomModal = (): ModalProps => {
  const bottomSheetModalRef: React.RefObject<BottomSheetModalMethods> =
    useRef<BottomModalRef>(null);

  const onPressOpenModal: (...args: any[]) => void = useCallbackFunction(
    (index: (value: number) => void) => {
      bottomSheetModalRef.current?.present(index);
    }
  );
  const onPressCloseModal: () => void = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  return { bottomSheetModalRef, onPressOpenModal, onPressCloseModal };
};
