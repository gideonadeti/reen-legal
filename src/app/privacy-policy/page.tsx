import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
};

const Page = () => {
  const updatedDate = new Date("2025-07-08").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4 text-muted-foreground">Last Updated: {updatedDate}</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">
          1. Information Collection
        </h2>
        <p>
          We collect via{" "}
          <Link
            href="https://clerk.com"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clerk
          </Link>
          :
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Full name</li>
          <li>Email address</li>
        </ul>
        <p className="mt-2">Platform generates:</p>
        <ul className="list-disc list-inside">
          <li>Role (ADMIN/NADMIN)</li>
          <li>Virtual balance & transaction history</li>
          <li>Product data (for admins)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">2. Data Usage</h2>
        <p>We use your information to:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Enable platform functionality</li>
          <li>Process virtual transactions</li>
          <li>Display user profiles</li>
          <li>Send order notifications</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">3. Data Visibility</h2>
        <div className="space-y-3">
          <div>
            <p className="font-medium">Publicly visible:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Your name</li>
              <li>Role badge</li>
              <li>Balance</li>
              <li>Public stats (purchases/sales counts)</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">During purchases:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Sellers see your name and purchased items</li>
              <li>
                Sellers <span className="font-semibold">do not</span> see your
                email
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">4. Third-Party Services</h2>
        <div className="space-y-3">
          <p>REEN integrates with:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">Clerk</span> (authentication) -
              <Link
                href="https://clerk.com/privacy"
                className="underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <span className="font-semibold">Stripe</span> (test payments) -
              <Link
                href="https://stripe.com/privacy"
                className="underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
          <p className="font-semibold">
            No real payment data is collected or stored by REEN.
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">
          5. Data Retention & Deletion
        </h2>
        <div className="space-y-3">
          <p>When you delete your account:</p>
          <ul className="list-disc list-inside">
            <li>Profile is immediately removed</li>
            <li>Cart data is permanently deleted</li>
            <li>Products without orders are deleted</li>
            <li>Products with orders are anonymized</li>
          </ul>
          <p>Anonymized order data persists for platform integrity.</p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">6. Security Measures</h2>
        <p>We implement:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Saga transaction pattern for rollbacks</li>
          <li>Redis cache invalidation on data changes</li>
          <li>Secure API endpoints</li>
          <li>Stripe test-mode payment handling</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">7. User Rights</h2>
        <p>You can:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Update profile via Clerk</li>
          <li>Delete your account</li>
          <li>Request data access via email</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Contact</h2>
        <p>
          For privacy concerns:{" "}
          <span className="font-mono">gideonadeti0@gmail.com</span>
        </p>
      </section>
    </main>
  );
};

export default Page;
