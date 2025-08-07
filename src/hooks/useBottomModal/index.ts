import { useRef, useCallback } from "react";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { useCallbackFunction } from "../useCallback";
import {
  ModalProps,
  BottomModalRef,
  OnPress,
  ActionCallbackFunctionProps,
  RefProp,
} from "../../types";

export const useBottomModal = (): ModalProps => {
  const bottomSheetModalRef: RefProp<BottomSheetModalMethods> =
    useRef<BottomModalRef>(null);

  const onPressOpenModal: ActionCallbackFunctionProps = useCallbackFunction(
    (index: (value: number) => void) => {
      bottomSheetModalRef.current?.present(index);
    }
  );
  const onPressCloseModal: OnPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  return { bottomSheetModalRef, onPressOpenModal, onPressCloseModal };
};
