import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Grid } from "@material-ui/core"
import emailjs from "emailjs-com"
import { init } from "emailjs-com"
init(process.env.MAILJS_USER_ID)

const useStyle = makeStyles(theme => ({
  title: {
    fontSize: "2rem",
    marginTop: "2rem",
    marginBottom: 0,
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#777",
    marginTop: "0.2rem",
    marginBottom: "1rem",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formContainer: {
    width: "90vw",
    margin: "auto",
    marginTop: "2rem",
    textAlign: "center",
  },
  field: {
    width: "80%",
    margin: "auto",
    marginBottom: "1rem",
  },
  submit: {
    width: "60%",
    margin: "auto",
    marginTop: "2rem",
    marginBottom: "3rem",
  },
}))

const Contact = () => {
  const classes = useStyle()

  const [formValues, setFormValues] = useState({
    yourName: "",
    email: "",
    subject: "",
    message: "",
  })

  const onSubmit = e => {
    e.preventDefault()
    console.log(
      formValues,
      process.env.MAILJS_SERVICE_ID,
      process.env.MAILJS_TEMPLATE_ID
    )

    emailjs.send(
      process.env.MAILJS_SERVICE_ID,
      process.env.MAILJS_TEMPLATE_ID,
      {
        from_name: formValues.yourName,
        message: formValues.message,
        subject: formValues.subject,
        email: formValues.email,
      },
      process.env.MAILJS_USER_ID
    )

    setFormValues({
      yourName: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <h1 className={classes.title}>Contact Us</h1>
      <p className={classes.subtitle}>Fill out this form to send me an email</p>
      <div className={classes.formContainer}>
        <form>
          <Grid container>
            <Grid item xs={2} sm={3} />
            <Grid item container xs={8} sm={6} spacing={3}>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="yourName"
                  label="Your Name"
                  name="yourName"
                  autoComplete="off"
                  value={formValues.yourName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="email"
                  label="Your Email"
                  name="email"
                  autoComplete="off"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="subject"
                  label="Subject"
                  name="subject"
                  autoComplete="off"
                  value={formValues.subject}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="message"
                  label="Message"
                  name="message"
                  autoComplete="off"
                  value={formValues.message}
                  onChange={handleChange}
                />
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={onSubmit}
              >
                Send Email
              </Button>
            </Grid>

            <Grid item xs={2} sm={3} />
          </Grid>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
