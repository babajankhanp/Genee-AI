"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("c8a580bf-59f1-4e70-948e-2b326f20f44a");
  }, []);

  return null;
};
