import React from "react"

import Layout from "../components/layout"
import Contact from "../components/Contact/contact"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
      <SEO title="Contact Us" />
      <Contact></Contact>
    </Layout>
)

export default ContactPage
