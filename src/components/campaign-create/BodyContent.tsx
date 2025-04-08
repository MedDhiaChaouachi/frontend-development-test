import React from "react";
import styles from "./BodyContent.module.css";

type CampaignBodyProps = {
  children?: React.ReactNode;
};

export const CampaignBody = ({ children }: CampaignBodyProps) => {
  return (
    <main className={styles.mainContainer}>
      {/* Left Side - Editor with Segmented Sections */}
      <div className={styles.editorSection}>
        {/* Main Segment */}
        <div className={styles.segment}>
          {/* Body Section Header */}
          <div className={styles.bodySectionHeader}>
            <div className={styles.header}>
              <div className={styles.titleBadge}>
                <div className={styles.editableTitle}>
                  <div className={styles.frame}>
                    <div className={styles.sectionTitle}>Seasonal Shoppers</div>
                  </div>
                </div>
                <button className={styles.buttonCircleIcon}>
                  <img
                    src="/icons/ic-outline-edit-2.svg"
                    alt="Edit"
                    className={styles.icon}
                  />
                </button>
                <div className={styles.badge}>
                  <div className={styles.badgeContainer}>
                    <img
                      src="/icons/ic-filled-profile-2user.svg"
                      alt="Users"
                      className={styles.iconLeft}
                    />
                    <div className={styles.badgeText}>237</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recipients Section */}
          <div className={styles.recipientsSection}>
            <div className={styles.recipientsText}>Recipients</div>
          </div>

          {/* Input Fields Container */}
          <div className={styles.inputFieldsContainer}>
            {/* Send to Field */}
            <div className={styles.inputFieldWrapper}>
              <div className={styles.inputHeader}>
                <div className={styles.textLabel}>Send to</div>
              </div>
              <div className={styles.inputBox}>
                <div className={styles.inputContent}>
                  Select one or more options
                </div>
                <div className={styles.dropdownIcon}>
                  <img
                    src="/icons/arrow-down.svg"
                    alt="Dropdown"
                    className={styles.arrowIcon}
                  />
                </div>
              </div>
            </div>

            {/* Don't send to Field */}
            <div className={styles.inputFieldWrapper}>
              <div className={styles.inputHeader}>
                <div className={styles.textLabel}>Don't send to</div>
                <div className={styles.optionalText}>Optional</div>
              </div>
              <div className={styles.inputBox}>
                <div className={styles.inputContent}>
                  Select one or more options
                </div>
                <div className={styles.dropdownIcon}>
                  <img
                    src="/icons/arrow-down.svg"
                    alt="Dropdown"
                    className={styles.arrowIcon}
                  />
                </div>
              </div>
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

      {/* Render children if passed */}
      {children}
    </main>
  );
};
