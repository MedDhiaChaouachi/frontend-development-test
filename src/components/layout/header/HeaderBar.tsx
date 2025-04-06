import styles from "./HeaderBar.module.css";

export const HeaderBar = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.container}>
        {/* Top Navbar */}
        <div className={styles.navbar}>
          {/* Frame 1 - Credits + Revenue */}
          <div className={styles.leftGroup}>
            <div className={styles.credits}>Credits: 120</div>
            <div className={styles.revenue}>Revenue: $1,200</div>
          </div>

          {/* Frame 2 - Center */}
          <div className={styles.centerGroup}></div>

          {/* Frame 3 - Menu and Profile */}
          <div className={styles.rightGroup}>
            <button className={styles.menuButton}>☰</button>
            <div className={styles.profileContainer}>
              <img
                src="/profile.jpg"
                alt="Profile"
                className={styles.profileImage}
              />
              <span>John Doe</span>
            </div>
          </div>
        </div>

        {/* Below Navbar - Header Section */}
        <div className={styles.headerSection}>
          <div className={styles.leftAction}>
            <button className={styles.circleButton}>
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          </div>
          <div className={styles.pageTitle}>Dashboard Overview</div>
        </div>
      </div>
    </header>
  );
};
