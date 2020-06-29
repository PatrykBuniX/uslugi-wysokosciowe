import React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <div>
    <h1>Błąd! Nie ma takiej strony</h1>
    <p>
      Kliknij, aby przejść{" "}
      <Link to="/">
        <b style={{ fontSize: "1.25rem" }}>na stronę główną</b>
      </Link>
    </p>
  </div>
)

export default NotFoundPage
