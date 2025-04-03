import styles from "./BodyContent.module.css";

export const CampaignBody = () => {
  return (
    <main className={styles.mainContainer}>
      {/* Left Side - Editor with Segmented Sections */}
      <div className={styles.editorSection}>
        {/* Main Campaign Segment */}
        <div className={styles.bodySegment}>
          <div className={styles.segmentHeader}>
            <h2>Campaign Details</h2>
          </div>

          <div className={styles.segmentContent}>
            {/* Form fields */}
            <div className={styles.formGroup}>
              <label>Campaign Name</label>
              <input type="text" placeholder="Enter campaign name" />
            </div>

            <div className={styles.formGroup}>
              <label>Target Audience</label>
              <select>
                <option>All Users</option>
                <option>New Users</option>
                <option>Returning Users</option>
              </select>
            </div>
          </div>

          <div className={styles.segmentFooter}>
            <button className={styles.primaryButton}>Save Draft</button>
          </div>
        </div>

        {/* Additional Segment - Content Section */}
        <div className={styles.bodySegment}>
          <div className={styles.segmentHeader}>
            <h2>Content Configuration</h2>
          </div>

          <div className={styles.segmentContent}>
            <div className={styles.formGroup}>
              <label>Message Title</label>
              <input type="text" placeholder="Enter message title" />
            </div>

            <div className={styles.formGroup}>
              <label>Message Body</label>
              <textarea placeholder="Enter your message"></textarea>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - iPhone Preview */}
      <div className={styles.previewSection}>
        <div className={styles.iphoneMockup}>
          <img
            src="/iphone-x-black.svg"
            alt="iPhone X Preview"
            className={styles.iphoneImage}
          />
        </div>
      </div>
    </main>
  );
};
