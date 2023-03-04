import React from "react";

const Instructions = () => {
  return (
    <div class="block">
      <h1>Make It Count</h1>
      Your goal: implement a page showing <strong>3 counters</strong>
      <br />
      <ul>
        <li>every counter has a + and a - button</li>
        <li>
          for every counter, clicking on + will increase the count number on
          that single counter
        </li>
        <li>
          for every counter, clicking on - will decrease the count number on
          that single counter
        </li>
        <li>
          the page will have 2 extra buttons "decrease all" and "increase all"
        </li>
        <li>
          clicking on "increase all" will increase the count of one unit on all
          the counters
        </li>
        <li>
          clicking on "decrease all" will decrease the count of one unit on all
          the counters
        </li>
      </ul>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://reactjs.org/docs/state-and-lifecycle.html"
      >
        Help
      </a>
    </div>
  );
};

export default Instructions;
