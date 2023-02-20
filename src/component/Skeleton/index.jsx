import React from "react";
import { SkeletonItem } from "@atlaskit/menu";

export const Loader = () => (
  <div style={{ width: 320 }}>
    <SkeletonItem hasIcon isShimmering />
  </div>
);

export const LoaderIssue = () => (
  <div>
    <SkeletonItem isShimmering hasAvatar />
  </div>
);
