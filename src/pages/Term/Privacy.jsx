import { Banner4 } from "../../compontent/Banner/Banner";
import Navbar from "../../compontent/Navbar/Navbar";
import "./termCondition.css";
import pandp from "../../assets/pandp.png";
import Footer2 from "../../compontent/Footer/Footer2";

const Privacy = () => {
  return (
    <>
      <Navbar />
      <Banner4 />
      <div className="policy">
        <div className="policy-data">
          <p>Effective Date: 10-Oct-2024</p>
          <h2>Privacy Policy for PostBox by Angarak Solutions</h2>
          <p>
            We at Angarak Solutions, located at SP Nagar, Hyderabad, 500040, are committed to safeguarding your privacy. This Privacy Policy (“Policy”) explains how we collect, use, disclose, and protect your personal information when you use PostBox, our mobile social media application available on Google Play Store and Apple App Store, and any associated services (collectively referred to as “Services”).
          </p>
          <p>
            By downloading, installing, or using PostBox and associated services, you consent to the collection and use of your information as outlined in this Privacy Policy. If you disagree with any of the terms of this Policy, please discontinue the use of the app and related services immediately.
          </p>
          <h3>1. Introduction and Scope</h3>
          <p>
            This Privacy Policy governs how Angarak Solutions collects, uses, and manages personal data from users (“You”, “Your”, or “User”) of the PostBox application, including the services associated with it.
          </p>
          <p>
            PostBox is a social media platform designed to enable users to post, share, and engage with content such as photos, videos, comments, and opinions. By accessing or using the app, you consent to the data practices described in this Policy.
          </p>
          <h3>2. What Information We Collect</h3>
          <p>
            We collect information to provide, personalize, and improve our services to you. We collect the following categories of information:
          </p>
          <h4>2.1. Non-Personal Information</h4>
          <ul>
            <li>
              <strong>Device Information:</strong> Device model, operating system, browser type, language preference, mobile network provider, and other diagnostic data.
            </li>
            <li>
              <strong>Usage Data:</strong> Details of your interactions with the app, such as the date and time of your usage, app crash reports, pages viewed, and how you interact with various features.
            </li>
            <li>
              <strong>IP Address and Geolocation:</strong> Your IP address, country, or general geographic location.
            </li>
          </ul>
          <h4>2.2. Personal Information</h4>
          <ul>
            <li>
              <strong>Profile Information:</strong> Your name, email address, phone number, profile picture, and other details you provide when registering for the app.
            </li>
            <li>
              <strong>Social Media Information:</strong> If you link your social media accounts, we may collect details from those accounts with your permission.
            </li>
            <li>
              <strong>Posted Content:</strong> Photos, videos, text posts, and other user-generated content shared on the platform.
            </li>
            <li>
              <strong>Contact List:</strong> With your explicit consent, PostBox may access your phone’s contact list to facilitate sharing or communication with others.
            </li>
            <li>
              <strong>Location Information:</strong> With your permission, we may collect precise geolocation data from your device.
            </li>
          </ul>
          <h3>3. How We Use Your Information</h3>
          <p>
            We use your information in the following ways:
          </p>
          <h4>3.1. To Provide Services</h4>
          <ul>
            <li>Enable you to create, post, and share content with other users.</li>
            <li>Personalize your experience by showing relevant content.</li>
            <li>Process your requests and manage interactions.</li>
          </ul>
          <h4>3.2. To Improve and Develop the App</h4>
          <ul>
            <li>Analyze usage trends and enhance functionality.</li>
            <li>Fix bugs and add new features based on feedback.</li>
          </ul>
          <h4>3.3. To Communicate With You</h4>
          <ul>
            <li>Send updates, notifications, and communications related to your account.</li>
          </ul>
          <h4>3.4. For Marketing and Advertising</h4>
          <ul>
            <li>Show relevant advertisements based on app usage.</li>
            <li>Measure the effectiveness of ads and content delivery.</li>
          </ul>
          <h3>4. User-Generated Content and Responsibility</h3>
          <p>
            As a user of PostBox, you are responsible for the content you post. You must not post content that violates our terms, including but not limited to vulgar, offensive, defamatory, or illegal material.
          </p>
          <h3>5. Data Protection and Security</h3>
          <p>
            We take your data security seriously and implement various measures to protect it. However, no platform is 100% secure, and you should take steps to protect your account information.
          </p>
          <h3>6. Retention of Data</h3>
          <p>
            We retain your personal data as long as necessary for the purposes outlined in this policy, including legal compliance and dispute resolution.
          </p>
          <h3>7. Sharing Your Information</h3>
          <p>
            We do not sell your data. However, we may share it with third-party service providers and legal authorities when necessary.
          </p>
          <h3>8. Changes to this Privacy Policy</h3>
          <p>
            We may update this policy from time to time. If significant changes are made, we will notify you.
          </p>
          <h3>9. Contact Us</h3>
          <p>
            If you have any questions or concerns regarding this policy, contact us at:
          </p>
          <ul>
          <li>
              By email: <a href="mailto:info@postbox.com">info@postbox.com</a>
            </li>
            <li>Angarak Solutions, Hyderabad</li>
          </ul>
        </div>

        <div className="policy-data">
          <img src={pandp} alt="Privacy Policy" />
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default Privacy;
