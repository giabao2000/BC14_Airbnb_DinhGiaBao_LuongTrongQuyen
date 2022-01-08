import React from "react";
import BannerComponent from "./BannerComponent";
import BlogComponent from "./BlogComponent";
import ShowcaseComponent from "./ShowcaseComponent";

export default function HomePage() {
  return (
    <>
      <BannerComponent />
      <ShowcaseComponent />
      <ShowcaseComponent />
      <BlogComponent />
    </>
  );
}
