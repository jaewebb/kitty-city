export default function Favorites() {
  return (
    <main className="min-h-screen m-10">
      <h1>About</h1>
      <div>
        This is a work in progress demo site, these cats are fictional
      </div>
      <div className="py-2">
        I&apos;m going to add more features. In the meantime, check out my
        <a
          href="https://www.webbdevdesign.ca"
          className="ml-1 underline"
        >
          profile site!
        </a>
      </div>
      <div>
        <h3 className="h5">To do:</h3>
        <ul>
          <li><i className="fa-solid fa-cat ml-1" /> Add mobile menu</li>
          <li><i className="fa-solid fa-cat ml-1" /> OAuth login</li>
          <li><i className="fa-solid fa-cat ml-1" /> Add/edit/delete cats</li>
          <li><i className="fa-solid fa-cat ml-1" /> Favorite functionality</li>
          <li><i className="fa-solid fa-cat ml-1" /> I18n</li>
        </ul>
      </div>
    </main>
  );
}
