import React from "react";

function NavBar() {
  const links = [
    { id: 1, page: "#home"}, 
    { id: 2, page: "#about"}, 
    {id: 3, page: "#projects"}
  ];

const linkElements = links.map((link) => {
  return <a href={link.page} key={link.id}>{link.page}</a>
});


  return <nav>
    {linkElements}
    </nav>;
}

export default NavBar;
