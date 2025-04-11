"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./HeaderBar.module.css";
import Image from "next/image";

export const HeaderBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("En");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.container}>
        {/* Top Navbar */}
        <div className={styles.navbar}>
          {/* Frame 1 - Credits + Revenue */}
          <div className={styles.leftGroup}>
            <div className={styles.credits}>
              <div className={styles.creditsContainer}>
                <div className={styles.creditsIcon}>
                  <Image
                    src="/icons/sms-icon.svg"
                    alt="SMS Icon"
                    width={20}
                    height={20}
                  />
                </div>
                <div className={styles.creditsText}>
                  <div className={styles.creditsLabel}>My Credits</div>
                  <div className={styles.creditsValue}>
                    <span className={styles.creditsAmount}>15018</span>
                    <span className={styles.creditsType}>SMS</span>
                  </div>
                </div>
                <button className={styles.addCreditsButton}>
                  <div className={styles.addIconWrapper}>
                    <Image
                      src="/icons/add-icon.svg"
                      alt="Add Icon"
                      width={16}
                      height={16}
                      className={styles.addIcon}
                    />
                  </div>
                </button>
              </div>
            </div>
            <div className={styles.revenueContainer}>
              <div className={styles.revenueIcon}>
                <Image
                  src="/icons/money-icon.svg"
                  alt="Money Icon"
                  width={20}
                  height={20}
                />
              </div>
              <div className={styles.revenueText}>
                <div className={styles.revenueLabelFrame}>
                  <div className={styles.revenueLabel}>Revenue</div>
                  <div className={styles.revenueBadgeSmall}>
                    <div className={styles.revenueBadgeInner}>
                      <Image
                        src="/icons/revenue.svg"
                        alt="Badge Icon"
                        width={12}
                        height={12}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.revenueAmountFrame}>
                  <div className={styles.revenueAmount}>32.018.00</div>
                  <div className={styles.revenueCurrency}>TND</div>
                </div>
              </div>
            </div>
          </div>

          {/* Frame 2 - Center */}
          <div className={styles.centerGroup}></div>

          {/* Frame 3 - Menu and Profile */}
          <div className={styles.rightGroup} ref={dropdownRef}>
            <div className={styles.notificationButton}>
              <div className={styles.notificationIconWrapper}>
                <Image
                  src="/icons/notification-icon.svg"
                  alt="Notifications"
                  width={16}
                  height={16}
                  className={styles.notificationIcon}
                />
                <div className={styles.notificationBadge}>
                  <Image
                    src="/icons/label.svg"
                    alt="Notification Count"
                    width={6}
                    height={16}
                    className={styles.notificationLabel}
                  />
                </div>
              </div>
            </div>
            <div className={styles.profileContainer} onClick={toggleDropdown}>
              <div className={styles.avatar}>
                <Image
                  src="/icons/25.svg"
                  alt="Profile"
                  width={40}
                  height={40}
                  className={styles.avatarImg}
                />
              </div>

              <div className={styles.profileText}>
                <div className={styles.greeting}>Hello 👋</div>
                <div className={styles.profileName}>Hayfa</div>
              </div>
              <button
                className={styles.profileDropdownButton}
                data-open={isDropdownOpen}
                onClick={toggleDropdown}
              >
                <Image
                  src="/icons/ic-outline-arrow-down.svg"
                  alt="Dropdown"
                  width={12}
                  height={12}
                  className={styles.dropdownIcon}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className={styles.profileDropdownMenu}>
                  {/* Language Selection */}
                  <div
                    className={`${styles.dropdownItem} ${styles.languageItem}`}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <div className={styles.itemIcon}>
                        <Image
                          src="/icons/ic-outline-earth.svg"
                          alt="Language"
                          width={16}
                          height={16}
                        />
                      </div>
                      <div className={styles.itemLabel}>Langue</div>
                    </div>
                    <div className={styles.languageButtons}>
                      {["En", "Fr", "AR"].map((lang) => (
                        <button
                          key={lang}
                          className={`${styles.languageButton} ${
                            selectedLanguage === lang
                              ? styles.languageButtonActive
                              : ""
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedLanguage(lang);
                          }}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Settings */}
                  <div className={styles.dropdownItem}>
                    <div className={styles.itemIcon}>
                      <Image
                        src="/icons/ic-outline-setting-2 (1).svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </div>
                    <div className={styles.itemLabel}>Settings</div>
                  </div>

                  {/* Change Account */}
                  <div className={styles.dropdownItem}>
                    <div className={styles.itemIcon}>
                      <Image
                        src="/icons/ic-outline-square-swap-horizontal.svg"
                        alt="Change Account"
                        width={16}
                        height={16}
                      />
                    </div>
                    <div className={styles.itemLabel}>Changer de compte</div>
                  </div>

                  {/* Logout */}
                  <div className={styles.dropdownItem}>
                    <div className={styles.itemIcon}>
                      <Image
                        src="/icons/ic-outline-logout.svg"
                        alt="Logout"
                        width={16}
                        height={16}
                      />
                    </div>
                    <div className={styles.itemLabel}>Se déconnecter</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Below Navbar - Header Section */}
        <div className={styles.headerSection}>
          <div className={styles.leftAction}>
            <button className={styles.circleButton}>
              <div className={styles.buttonIcon}>
                <Image
                  src="/icons/ic-outline-arrow-left.svg"
                  alt="Back"
                  width={16}
                  height={16}
                />
              </div>
            </button>
          </div>
          <div className={styles.pageTitle}>
            <span className={styles.titleText}>Create campaign</span>
          </div>
        </div>
      </div>
    </header>
  );
};
