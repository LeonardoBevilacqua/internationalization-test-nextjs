"use client";

import { useEffect, useState } from "react";
import { getDictionary } from "../dictionaries";

export default function Page({ params: { lang } }) {
  const [dict, setDict] = useState({});

  useEffect(() => {
    async function loadDict() {
      const dict = await getDictionary(lang);
      setDict(dict);
    }
    loadDict();
  }, [lang]);

  return <div>{dict.helloWord}</div>;
}
