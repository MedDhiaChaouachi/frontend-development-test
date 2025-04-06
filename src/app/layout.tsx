import type { Metadata } from "next";
import { Sidebar } from "@/components/layout/sidebar/Sidebar";
import { CampaignBody } from "@/components/campaign-create/BodyContent";
import { HeaderBar } from "@/components/layout/header/HeaderBar";
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
        <div className={styles.sidebarContainer}>
          <Sidebar />
        </div>
        <div className={styles.mainContentArea}>
          <HeaderBar />
          <div className={styles.contentWrapper}>
            <CampaignBody>{children}</CampaignBody>
          </div>
        </div>
      </body>
    </html>
  );
}
