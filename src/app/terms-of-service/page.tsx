import Link from "next/link";

export const metadata = {
  title: "Terms of Service",
};

const Page = () => {
  const updatedDate = new Date("2025-07-08").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4 text-muted-foreground">Last Updated: {updatedDate}</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
        <p>
          By using{" "}
          <Link
            href="https://reen-commerce.vercel.app"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            REEN
          </Link>{" "}
          (this practice project), you agree to these Terms. REEN is a
          demonstration platform only -
          <span className="font-semibold"> no real transactions occur</span>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">2. Virtual Economy</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            All balances and transactions use{" "}
            <span className="font-semibold">simulated currency</span> ($4M
            starting balance)
          </li>
          <li>
            Stripe operates in{" "}
            <span className="font-semibold">test mode only</span> - use card:
            <span className="font-mono bg-muted px-1.5 py-0.5 rounded mx-1">
              4242 4242 4242 4242
            </span>
          </li>
          <li>
            Virtual funds have no real-world value and are non-transferable
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">
          3. Account Responsibilities
        </h2>
        <p>
          When signing up via{" "}
          <Link
            href="https://clerk.com"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clerk
          </Link>
          , you agree to:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Maintain account security</li>
          <li>Not attempt real payments</li>
          <li>Not exploit system vulnerabilities</li>
          <li>Not impersonate other users</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">4. Role Management</h2>
        <div className="space-y-2">
          <p>Upgrading to ADMIN requires $160,000 virtual credit and grants:</p>
          <ul className="list-disc list-inside">
            <li>Product creation rights (4% fee on price × quantity)</li>
            <li>Product management capabilities</li>
            <li>Earnings from sales</li>
          </ul>
          <p>
            Downgrading to NADMIN is free. REEN reserves the right to revoke
            ADMIN privileges for abuse.
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">5. Transactions & Fees</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Maximum order value: $999,999.99</li>
          <li>Product creation/update fees: 4% of value changes</li>
          <li>All sales are final - no refunds in virtual economy</li>
          <li>Own products cannot be purchased</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">6. Content Rules</h2>
        <div className="space-y-2">
          <p>When creating products:</p>
          <ul className="list-disc list-inside">
            <li>You generate images via robohash integration</li>
            <li>Low stock alerts appear below 8 units</li>
          </ul>
          <p>Deleting products:</p>
          <ul className="list-disc list-inside">
            <li>With order history: Product anonymized</li>
            <li>Without orders: Permanently deleted</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">7. Account Deletion</h2>
        <p>Upon account deletion:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Profile is immediately removed</li>
          <li>Products without orders are deleted</li>
          <li>Products with orders are anonymized</li>
          <li>Cart data is destroyed</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">8. Disclaimers</h2>
        <div className="space-y-2">
          <p className="font-semibold">REEN IS A PRACTICE PROJECT ONLY</p>
          <ul className="list-disc list-inside">
            <li>No real e-commerce functionality</li>
            <li>No warranties of service reliability</li>
            <li>No liability for data loss or bugs</li>
            <li>For demonstration purposes only</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">9. Governing Law</h2>
        <p>
          These Terms are governed by the laws of Nigeria. Any disputes shall be
          resolved in Lagos courts.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Contact</h2>
        <p>
          Email: <span className="font-mono">gideonadeti0@gmail.com</span>
        </p>
      </section>
    </main>
  );
};

export default Page;
