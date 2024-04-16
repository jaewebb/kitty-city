export default function Favorites() {
  return (
    <main className="min-h-screen m-10">
      <h1>About</h1>
      <p>
        This is a work in progress demo site, these cats are fictional.
      </p>
      <p>
        I usually spend a lot of time on the front end
        but for this project I focused more on the rest so I could learn a new tech stack.
      </p>
      <p>
        I plan to add more features, in the meantime check out my
        <a
          href="https://www.webbdevdesign.ca"
          className="ml-1 underline"
        >
          profile site!
        </a> I have both a vue and a react version.
      </p>
      <div className="my-10">
        <h2>Stack:</h2>
        <p>React, Next.js, Vercel, SWR, Prisma, Tailwind, Postgres</p>
      </div>
      <div>
        <h3 className="h5">To do:</h3>
        <ul>
          <li>
            <i className="fa-solid fa-cat mr-1" />
            Add filters (age, gender, etc)
          </li>
          <li>
            <i className="fa-solid fa-cat mr-1" />
            Implement site design, so it looks nice
          </li>
          <li>
            <i className="fa-solid fa-cat mr-1" />
            Add mobile menu
          </li>
          <li>
            <i className="fa-solid fa-cat mr-1" />
            Add/edit/delete cats
          </li>
          <li>
            <i className="fa-solid fa-cat mr-1" />
            Favorite functionality
          </li>
          <li>
            <i className="fa-solid fa-cat mr-1" />
            I18n
          </li>
        </ul>
      </div>
    </main>
  );
}
