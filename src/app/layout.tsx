"use client";

import { Providers } from "./providers";
import { RecoilRoot } from "recoil";
import "normalize.css";
import './index.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     
      <body className=" ">
        <RecoilRoot>
          <Providers>{children}</Providers>
        </RecoilRoot>
      </body>
    </html>
  );
}
