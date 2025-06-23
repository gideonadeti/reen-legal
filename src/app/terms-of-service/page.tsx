import Link from "next/link";

export const metadata = {
  title: "Terms of Service",
};

const Page = () => {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <section className="mb-6">
        <p>
          To use REEN, you must sign up with{" "}
          <Link
            href="https://clerk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Clerk
          </Link>{" "}
          and agree to our Terms of Service and Privacy Policy.
        </p>
      </section>

      <section className="mb-6">
        <p>
          After signup, you are taken to your profile page which includes
          details like:
        </p>
        <ul className="list-disc list-inside">
          <li>Name</li>
          <li>Balance (default $4,000,000)</li>
          <li>Balance chart</li>
          <li>Number of Purchases with link to orders page</li>
          <li> Amount Spent, Sales (if ADMIN), Amount Gained</li>
          <li>Products (link to your products if you&apos;re an ADMIN)</li>
        </ul>
      </section>

      <section className="mb-6 space-y-2">
        <div>
          <p>Navigation includes links to:</p>
          <ul className="list-disc list-inside">
            <li>Profile - takes you to your profile page</li>
            <li>
              Profiles - takes you to see a list of all users and view
              individual profiles
            </li>
            <li>Products - takes you to view all products on the platform</li>
            <li>Orders - takes you to view your past purchases</li>
            <li>My Products (if ADMIN) - view/manage your products only</li>
          </ul>
        </div>
        <div>
          <p>Navigation footer has:</p>
          <ul className="list-disc list-inside">
            <li>Button to create a product (if ADMIN)</li>
            <li>Button to switch role</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <p>
          On product pages, buyers can preview product details, add items to
          cart (if not their own), and complete purchases via Stripe test
          checkout. A modal will explain how to pay using Stripe test details
          (card:{" "}
          <span className="font-semibold text-foreground border px-1 rounded">
            4242 4242 4242 4242
          </span>
          , any future expiry, any CVC). Real payment data should not be used.
        </p>
      </section>

      <section className="mb-6">
        <p>
          After successful payment, Stripe redirects the user to a confirmation
          page with a confetti animation and links to continue shopping or view
          their orders.
        </p>
      </section>

      <section className="mb-6">
        <p>
          Admins can create products, which costs{" "}
          <span className="font-semibold text-foreground border px-1 rounded">
            4% of (price x quantity)
          </span>
          . Updating a product costs 4% of any increase in price or quantity.
        </p>
      </section>

      <section className="mb-6">
        <p>Admin upgrades cost $160,000 virtual credit. Downgrades are free.</p>
      </section>

      <section className="mb-6">
        <p>When a user deletes their account:</p>
        <ul className="list-disc list-inside">
          <li>They&apos;re removed from the users list</li>
          <li>Their profile becomes inaccessible</li>
          <li>Unrelated products are deleted</li>
          <li>Products tied to orders are anonymized</li>
          <li>Related cart items are deleted</li>
        </ul>
      </section>

      <section>
        <p>Email: gideonadeti0@gmail.com</p>
      </section>
    </main>
  );
};

export default Page;
