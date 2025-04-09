"use client";

import React, { useState } from "react";
import styles from "./BodyContent.module.css";

type CampaignBodyProps = {
  children?: React.ReactNode;
};

export const CampaignBody = ({ children }: CampaignBodyProps) => {
  const [message, setMessage] = useState("");
  const messageCount = message.length;
  const messageParts = Math.ceil(messageCount / 160);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

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

          {/* Campaign Content Section */}
          <div className={styles.campaignContentSection}>
            <div className={styles.campaignContentHeader}>
              <div className={styles.campaignContentTitle}>
                Campaign Content
              </div>
            </div>
            <div className={styles.inputContainerTextarea}>
              <div className={styles.textareaTopSection}>
                <textarea
                  className={styles.campaignTextarea}
                  placeholder="Enter your campaign message here..."
                  value={message}
                  onChange={handleMessageChange}
                  maxLength={320}
                />
                <div className={styles.characterCounter}>
                  {messageCount}/180
                </div>
              </div>

              <div className={styles.textareaBottomSection}>
                <div className={styles.actionButtons}>
                  <button
                    className={`${styles.buttonCircleIconSmall} ${styles.boldButton}`}
                  >
                    <img
                      src="/icons/ic-filled-stars.svg"
                      alt="Bold"
                      className={styles.actionIcon}
                    />
                  </button>
                  <button className={styles.buttonCircleIconSmall}>
                    <img
                      src="/icons/ic-outline-link.svg"
                      alt="Italic"
                      className={styles.actionIcon}
                    />
                  </button>
                  <button className={styles.buttonCircleIconSmall}>
                    <img
                      src="/icons/ic-outline-smile-circle.svg"
                      alt="Link"
                      className={styles.actionIcon}
                    />
                  </button>
                  <button className={styles.buttonCircleIconSmall}>
                    <img
                      src="/icons/ic-outline-message-add.svg"
                      alt="List"
                      className={styles.actionIcon}
                    />
                  </button>
                  <button className={styles.buttonCircleIconSmall}>
                    <img
                      src="/icons/ic-outline-save-2.svg"
                      alt="Emoji"
                      className={styles.actionIcon}
                    />
                  </button>
                  <button className={styles.smallIconButton}>
                    <img
                      src="/icons/Vector.svg"
                      alt="Action"
                      className={styles.smallIcon}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.campaignHintContainer}>
              <div className={styles.campaignHelperText}>
                {messageCount} Character{messageCount !== 1 ? "s" : ""} in{" "}
                {messageParts} message{messageParts !== 1 ? "s" : ""} (160
                characters per message)
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
