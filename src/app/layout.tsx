import type { Metadata } from "next";
import { Sidebar } from "@/components/layout/sidebar/Sidebar";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Your App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Sidebar />
        <main className={styles.mainContent}>{children}</main>
      </body>
    </html>
  );
}
