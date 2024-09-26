import React from "react";
import { Redirect } from "expo-router";
import { JSX } from "../types";

export default function Index(): JSX {
  return <Redirect href="/welcome" />;
}
