export default function PrivacyPage() {
    return (
        <div className="container card" style={{ marginTop: 28 }}>
            <h1>Privacy Policy</h1>
            <p>
                GetSeatDrop collects limited information needed to operate the service,
                such as contact details, event tracking preferences, and basic usage data.
            </p>

            <h2>Information We Collect</h2>
            <ul>
                <li>Contact information you provide, including email address and mobile number</li>
                <li>Event and price tracking preferences</li>
                <li>Basic usage data (logs, performance, error reports)</li>
            </ul>

            <h2>How We Use Information</h2>
            <ul>
                <li>To create and manage ticket price alerts</li>
                <li>To send email and SMS notifications you request</li>
                <li>To improve site functionality, reliability, and user experience</li>
            </ul>

            <h2>SMS Communications</h2>
            <p>
                If you provide your mobile number and opt in, GetSeatDrop may send you SMS
                alerts about ticket price changes for events you choose to track.
                Message frequency varies based on your alert activity. Message and data
                rates may apply.
            </p>
            <p>
                You can opt out of SMS messages at any time by replying STOP. For help,
                reply HELP or contact us at{" "}
                <a href="mailto:support@getseatdrop.com">support@getseatdrop.com</a>.
            </p>
            <p>
                We do not sell or share your mobile number with third parties for their
                own marketing purposes.
            </p>

            <h2>Third-Party Services</h2>
            <p>
                We may use third-party services for hosting, analytics, communications,
                and affiliate tracking. These providers have their own privacy practices.
            </p>

            <h2>No Sale of Personal Information</h2>
            <p>We do not sell personal information.</p>

            <h2>Contact</h2>
            <p>
                For privacy questions, contact:{" "}
                <a href="mailto:support@getseatdrop.com">support@getseatdrop.com</a>
            </p>
        </div>
    )
}