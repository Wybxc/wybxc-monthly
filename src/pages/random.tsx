import React, { useEffect } from "react";
import { Redirect } from "@docusaurus/router";
import { usePluginData } from "@docusaurus/useGlobalData";

interface DocsPluginData {
  versions: {
    docs: {
      id: string;
      path: string;
      [key: string]: any;
    }[];
  }[];
  [key: string]: any;
}

export default function Page() {
  const [randomDoc, setRandomDoc] = React.useState<string>("/");
  const docsPluginData = usePluginData("docusaurus-plugin-content-docs") as DocsPluginData;
  useEffect(() => {
    const docs = docsPluginData.versions[0].docs;
    const randomDoc = docs[Math.floor(Math.random() * docs.length)];
    setRandomDoc(randomDoc.path);
  }, []);
  return <Redirect to={randomDoc} />;
}