import React from 'react';

function Footer() {
  return (
    <section className="">
      <div className="flex justify-evenly items-center h-16 bg-green-200 text-black">
        <div className="">
          <a href="https://twitter.com/nmartinpdx">
            <i className="fab fa-twitter-square fa-2x m-4 hover:bg-yellow-300"></i>
          </a>
          <a href="https://github.com/nicole-m-martin">
            <i className="fab fa-github-square fa-2x m-4 hover:bg-green-300"></i>
          </a>
          <a href="https://www.linkedin.com/in/nicolemartinpdx/">
            <i className="fab fa-linkedin fa-2x m-4 hover:bg-blue-400"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
