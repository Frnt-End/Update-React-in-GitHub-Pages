import React from "react";
import AuthorImg from "./author.png";

const Portfolio = () => {
  window.open("https://frnt-end.github.io/portfolio/", "_blank");
};

export function Tutorial() {
  return (
    <div className="code-lines">
      <pre>
        <code>{`npm run deploy`}</code>
      </pre>

      <pre>
        <code>{`git add .`}</code>
      </pre>

      <pre>
        <code>{`git commit -m "update build for gh-pages"`}</code>
      </pre>

      <pre>
        <code>{`git push -u origin master`}</code>
      </pre>
    </div>
  );
}

export function Author() {
  return (
    <div className="author-container">
      <div>
        <img src={AuthorImg} alt="Autor" />
        <p>
          Creative & Code:)
          <br />
          <a
            href="https://frnt-end.github.io/portfolio/"
            target="_blank"
            rel="noreferrer"
          >
            Portfolio Website
          </a>
        </p>
      </div>
      <button onClick={Portfolio}>Portfolio</button>
    </div>
  );
}
