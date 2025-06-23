export const metadata = {
  title: "Privacy Policy",
};

const Page = () => {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <section className="mb-6">
        <p>
          When you sign up on REEN, we collect your name and email address via
          Clerk. This information is used throughout the platform to identify
          you in various areas.
        </p>
      </section>

      <section className="mb-6">
        <p>
          Your name and role will appear in the list of users visible to
          everyone on the platform. Anyone can click your entry to view your
          profile, which includes your:
        </p>
        <ul className="list-disc list-inside">
          <li>Name</li>
          <li>Role (NADMIN or ADMIN)</li>
          <li>Balance</li>
          <li>Balance chart</li>
          <li>Number of purchases</li>
          <li>Amount spent</li>
          <li>Amount gained (if ADMIN)</li>
          <li>Number of products and a link to view them (if ADMIN)</li>
        </ul>
      </section>

      <section className="mb-6">
        <p>
          When you purchase products, only the seller of those products will see
          your name and the items you purchased from them. No other users will
          see your orders. Sellers only see the buyer name—not the email or any
          other private data.
        </p>
      </section>

      <section className="mb-6">
        <p>
          Once an order is created, it cannot be updated or deleted by you or
          any other user. Even if a product related to the order is deleted by
          its creator, a clone of that product will be stored with the order to
          maintain consistency. However, the creator of the product will be
          anonymized. Orders are only permanently deleted when the associated
          user deletes their account.
        </p>
      </section>

      <section className="mb-6">
        <p>
          When you become an ADMIN, your products will be visible on the
          platform. Your name will appear next to each product you create, and
          users will be able to view other products by you from the product
          page.
        </p>
      </section>

      <section className="mb-6">
        <p>When you delete your account:</p>
        <ul className="list-disc list-inside">
          <li>
            You are removed from the user list and your profile is no longer
            visible.
          </li>
          <li>
            All cart items created by or related to your products are deleted.
          </li>
          <li>Products not tied to any orders are deleted entirely.</li>
          <li>
            Products tied to existing orders are anonymized and unlinked from
            you.
          </li>
        </ul>
      </section>

      <section>
        <p>Email: gideonadeti0@gmail.com</p>
      </section>
    </main>
  );
};

export default Page;
