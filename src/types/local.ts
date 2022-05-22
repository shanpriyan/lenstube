import { WebBundlr } from "@bundlr-network/client";

import { Comment, Post } from ".";

export type VideoDraft = {
  preview: string;
  title: string;
  description: string;
};
export type BundlrDataState = {
  instance: WebBundlr | null;
  balance: string;
  estimatedPrice: string;
  deposit: number | null;
  depositing: boolean;
  showDeposit: boolean;
  uploading: boolean;
};

export type LenstubePublication = Post & Comment & { pubId: string };
