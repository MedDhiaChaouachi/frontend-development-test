import type { Metadata } from "next";
import { Sidebar } from "@/components/layout/sidebar/Sidebar";
import { CampaignBody } from "@/components/campaign-create/BodyContent";
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
      <body className={styles.rootLayout}>
        <Sidebar />
        <main className={styles.mainContent}>
          <CampaignBody />
        </main>
      </body>
    </html>
  );
}
