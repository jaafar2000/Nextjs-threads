import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Bottombar from "../../../components/shared/Bottombar";
import LeftSidebar from "../../../components/shared/LeftSidebar";
import RightSidebar from "../../../components/shared/RightSidebar";
import Tobpar from "../../../components/shared/Tobpar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description: "Next 13 Threads applciation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Tobpar />
          <main className="flex flex-row" >
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl ">{children}</div>
            </section>
            <RightSidebar />
          </main>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
