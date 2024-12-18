import React, { forwardRef, useMemo } from "react";
import { StyleSheet } from "react-native";
import { Div as View } from "react-native-magnus";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";
import {
  BottomModalRef,
  BottomModalProps,
  BottomModalExoticComponent,
} from "../../../types";

export const BottomModal: BottomModalExoticComponent = forwardRef<
  BottomModalRef,
  BottomModalProps
>((props, ref) => {
  const snapPoints = useMemo(() => [props.snapPointsValue], []);
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={ref}
        snapPoints={snapPoints}
        enableContentPanningGesture={props.enableContentPanningGesture}
        enablePanDownToClose
        enableDynamicSizing
        handleIndicatorStyle={{ backgroundColor: "#155e75" }}
        backgroundStyle={styles.bottomSheetColorWithRadiusTop}
      >
        <BottomSheetView style={styles.bottomSheetColorWithRadiusTop}>
          <LinearGradient
            colors={["#1e293b", "#155e75"]}
            start={{ x: 0.8, y: 1 }}
            end={{ x: 0.8, y: 0.2 }}
            style={styles.bottomSheetColorWithRadiusTop}
          >
            <View
              flex={1}
              w="100%"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
            >
              {props.children}
            </View>
          </LinearGradient>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});

const styles = StyleSheet.create({
  bottomSheetColorWithRadiusTop: {
    flex: 1,
    backgroundColor: "#155e75",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});
