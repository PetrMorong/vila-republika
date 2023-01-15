import React from "react";
import { Helmet } from "react-helmet";
import { setConfig } from "cloudinary-build-url";

setConfig({
  cloudName: "morireality",
  apiKey: "465321175721736",
  apiSecret: "71xSUQ9WJBuUtLTVwlBy5BwOQ74",
});

export default function DataContainer({ children }: any) {
  return <div>{children}</div>;
}
