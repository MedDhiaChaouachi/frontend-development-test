"use client";

import React, { useState } from "react";
import styles from "./BodyContent.module.css";

type CampaignBodyProps = {
  children?: React.ReactNode;
};

export const CampaignBody = ({ children }: CampaignBodyProps) => {
  const [message, setMessage] = useState("");
  const [shortenLinks, setShortenLinks] = useState(false);
  const [includeTracking, setIncludeTracking] = useState(true);
  const [customizeTracking, setCustomizeTracking] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("08:00");
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const messageCount = message.length;
  const messageParts = Math.ceil(messageCount / 160);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const toggleShortenLinks = () => setShortenLinks(!shortenLinks);
  const toggleIncludeTracking = () => setIncludeTracking(!includeTracking);
  const toggleCustomizeTracking = () =>
    setCustomizeTracking(!customizeTracking);
  const toggleDatePicker = () => setShowDatePicker(!showDatePicker);
  const toggleTimePicker = () => setShowTimePicker(!showTimePicker);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const navigateMonth = (direction: number) => {
    if (direction === -1 && currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else if (direction === 1 && currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + direction);
    }
  };

  const generateDays = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className={styles.calendarDayEmpty}></div>
      );
    }

    // Add cells for each day of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected =
        selectedDate &&
        selectedDate.getDate() === i &&
        selectedDate.getMonth() === currentMonth &&
        selectedDate.getFullYear() === currentYear;

      days.push(
        <div
          key={`day-${i}`}
          className={`${styles.calendarDay} ${
            isSelected ? styles.calendarDaySelected : ""
          }`}
          onClick={() =>
            handleDateSelect(new Date(currentYear, currentMonth, i))
          }
        >
          {i}
        </div>
      );
    }

    return days;
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "DD/MM/YYYY";
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleApply = () => {
    // Handle the apply action here
    setShowDatePicker(false);
    setShowTimePicker(false);
  };

  const handleCancel = () => {
    setShowDatePicker(false);
    setShowTimePicker(false);
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

          {/* Tracking Section */}
          <div className={styles.trackingSection}>
            {/* Tracking Header */}
            <div className={styles.trackingHeader}>
              <div className={styles.trackingTitle}>Tracking</div>
              <button className={styles.trackingHeaderButton}>
                <img
                  src="/icons/ic-outline-minus-cirlce.svg"
                  alt="Info"
                  className={styles.trackingHeaderIcon}
                />
              </button>
            </div>
            {/* Shorten Links Toggle */}
            <div className={styles.toggleContainer}>
              <div className={styles.toggleTextContainer}>
                <div className={styles.toggleMainText}>
                  Shorten all links with bzbp.tn
                </div>
              </div>
              <div
                className={`${styles.toggleSwitch} ${
                  shortenLinks ? styles.toggleOn : ""
                }`}
                onClick={toggleShortenLinks}
              >
                <div className={styles.toggleKnob}></div>
              </div>
            </div>

            {/* Include Tracking Toggle */}
            <div className={styles.toggleContainer}>
              <div className={styles.toggleTextContainer}>
                <div className={styles.toggleMainText}>
                  Include tracking parameters
                </div>
                <div className={styles.toggleDescription}>
                  Links in this campaign will include addictional tracking
                  information, called UTM parameters. <br />
                  This allows source tracking within third-party reporting tools
                  such as Google Analytics.
                </div>
              </div>
              <div
                className={`${styles.toggleSwitch} ${
                  includeTracking ? styles.toggleOn : ""
                }`}
                onClick={toggleIncludeTracking}
              >
                <div className={styles.toggleKnob}></div>
              </div>
            </div>

            {/* Customize Tracking Toggle */}
            <div className={styles.toggleContainer}>
              <div className={styles.toggleTextContainer}>
                <div className={styles.toggleMainText}>
                  Customize tracking parameters
                </div>
                <div className={styles.toggleDescription}>
                  When enabled, this campaign will use the custom tracking
                  parameters defined below and will completely replace the
                  default parameters in your <u>Account Settings</u>.
                </div>
              </div>
              <div
                className={`${styles.toggleSwitch} ${
                  customizeTracking ? styles.toggleOn : ""
                }`}
                onClick={toggleCustomizeTracking}
              >
                <div className={styles.toggleKnob}></div>
              </div>
            </div>

            {/* Action Filter */}
            <div className={styles.actionFilter}>
              <button className={styles.testMessageButton}>
                <div className={styles.testMessageLabel}>
                  Send a test message
                </div>
              </button>
              <div className={styles.spacer}></div>
              <div className={styles.scheduleButtonContainer}>
                <button
                  className={styles.scheduleButton}
                  onClick={toggleDatePicker}
                >
                  <div className={styles.scheduleContainer}>
                    <div className={styles.scheduleLabel}>Schedule</div>
                    <img
                      src="/icons/ic-outline-calendar-add.svg"
                      alt="Schedule"
                      className={styles.iconRight}
                    />
                  </div>
                </button>

                {showDatePicker && (
                  <div className={styles.datePickerContainer}>
                    <div className={styles.datePickerHeader}>
                      <button
                        className={styles.navButton}
                        onClick={() => navigateMonth(-1)}
                      >
                        &lt;
                      </button>
                      <div className={styles.monthYearDisplay}>
                        {new Date(currentYear, currentMonth).toLocaleString(
                          "default",
                          { month: "long" }
                        )}{" "}
                        {currentYear}
                      </div>
                      <button
                        className={styles.navButton}
                        onClick={() => navigateMonth(1)}
                      >
                        &gt;
                      </button>
                    </div>

                    <div className={styles.dateInputContainer}>
                      <div className={styles.dateInput}>
                        {formatDate(selectedDate)}
                      </div>
                      <img
                        src="/icons/ic-outline-calendar-add.svg"
                        alt="Calendar"
                        className={styles.calendarIcon}
                      />
                    </div>

                    <div className={styles.calendarGrid}>
                      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                        <div key={day} className={styles.calendarDayHeader}>
                          {day}
                        </div>
                      ))}
                      {generateDays()}
                    </div>

                    <div className={styles.timePickerSection}>
                      <button
                        className={styles.timePickerToggle}
                        onClick={toggleTimePicker}
                      >
                        Select Time {showTimePicker ? "▲" : "▼"}
                      </button>

                      {showTimePicker && (
                        <div className={styles.timePickerContainer}>
                          <div className={styles.timePickerWheel}>
                            <div className={styles.timeColumn}>
                              {Array.from({ length: 24 }, (_, i) => i).map(
                                (hour) => (
                                  <div
                                    key={`hour-${hour}`}
                                    className={`${styles.timeItem} ${
                                      selectedTime.startsWith(
                                        `${hour.toString().padStart(2, "0")}:`
                                      )
                                        ? styles.timeItemSelected
                                        : ""
                                    }`}
                                    onClick={() =>
                                      handleTimeSelect(
                                        `${hour.toString().padStart(2, "0")}:00`
                                      )
                                    }
                                  >
                                    {hour.toString().padStart(2, "0")}
                                  </div>
                                )
                              )}
                            </div>
                            <div className={styles.timeColumn}>
                              <div
                                className={`${styles.timeItem} ${
                                  selectedTime.endsWith(":00")
                                    ? styles.timeItemSelected
                                    : ""
                                }`}
                                onClick={() =>
                                  handleTimeSelect(
                                    selectedTime.split(":")[0] + ":00"
                                  )
                                }
                              >
                                00
                              </div>
                              <div
                                className={`${styles.timeItem} ${
                                  selectedTime.endsWith(":30")
                                    ? styles.timeItemSelected
                                    : ""
                                }`}
                                onClick={() =>
                                  handleTimeSelect(
                                    selectedTime.split(":")[0] + ":30"
                                  )
                                }
                              >
                                30
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className={styles.datePickerActions}>
                      <button
                        className={styles.cancelButton}
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                      <button
                        className={styles.applyButton}
                        onClick={handleApply}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <button className={styles.sendButton}>
                <div className={styles.sendLabel}>Send</div>
                <img
                  src="/icons/ic-outline-send-2.svg"
                  alt="Send"
                  className={styles.iconRight}
                />
              </button>
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
