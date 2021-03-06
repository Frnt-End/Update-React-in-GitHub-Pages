import React from 'react';
import AuthorImg  from './author.png';



const Portfolio = () => {
  window.open(
              "https://nirit.website", "_blank");
}


export function Tutorial() {
  return (
    <div>
      <pre>
  <code>
  {`npm run deploy`}
  </code>
</pre>

<pre>
<code>
{`git add .`}
</code>
</pre>

<pre>
<code>
{`git commit -m "update build for gh-pages"`}
</code>
</pre>

<pre>
<code>
{`git push -u origin master`}
</code>
</pre>
    </div>
  )
}

export function Author() {
  return (
    <div className="author-container">
      <div>
      <img src={AuthorImg} alt="Autor" />
      <p>Creative & Code:)
      <br /><a href="https://nirit.website" target="_blank">nirit.website</a>
      </p>
      </div>
      <button onClick={Portfolio}>Portfolio</button>
    </div>
  )
}
