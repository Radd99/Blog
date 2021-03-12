import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Grid } from "@material-ui/core"
import emailjs from "emailjs-com"
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"

import { validateContactForm } from "../utils/validateContactForm"

import { init } from "emailjs-com"
init(process.env.MAILJS_USER_ID)

const useStyle = makeStyles(theme => ({
  title: {
    fontSize: "2rem",
    marginTop: "2rem",
    marginBottom: 0,
    textAlign: "center",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#777",
    marginTop: "0.2rem",
    textAlign: "center",
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
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      margin: "auto",
    },
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
  snackBarRoot: {
    width: "25%",
    margin: "auto",
    marginBottom: "1rem",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
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

  const [errorMessages, setErrorMessages] = useState({})
  const [yourNameError, setYourNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [subjectError, setSubjectError] = useState(false)
  const [messageError, setMessageError] = useState(false)

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (errorMessages.yourName !== undefined) {
      setYourNameError(true)
    } else {
      setYourNameError(false)
    }
    if (errorMessages.email !== undefined) {
      setEmailError(true)
    } else {
      setEmailError(false)
    }
    if (errorMessages.subject !== undefined) {
      setSubjectError(true)
    } else {
      setSubjectError(false)
    }
    if (errorMessages.message !== undefined) {
      setMessageError(true)
    } else {
      setMessageError(false)
    }
  }, [errorMessages])

  const onSubmit = e => {
    e.preventDefault()

    const { errors, valid } = validateContactForm(formValues)

    if (!valid) {
      setErrorMessages(errors)
    } else {
      setYourNameError(false)
      setEmailError(false)
      setSubjectError(false)
      setMessageError(false)
      setErrorMessages({})

      console.log(
        process.env.GATSBY_MAILJS_SERVICE_ID,
        process.env.GATSBY_MAILJS_TEMPLATE_ID,
        process.env.GATSBY_MAILJS_USER_ID
      )

      emailjs.send(
        process.env.GATSBY_MAILJS_SERVICE_ID,
        process.env.GATSBY_MAILJS_TEMPLATE_ID,
        {
          from_name: formValues.yourName,
          message: formValues.message,
          subject: formValues.subject,
          email: formValues.email,
        },
        process.env.GATSBY_MAILJS_USER_ID
      )

      setOpen(true)

      setFormValues({
        yourName: "",
        email: "",
        subject: "",
        message: "",
      })
    }
  }

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
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
                  required
                  error={yourNameError}
                  helperText={errorMessages.yourName}
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
                  error={emailError}
                  helperText={errorMessages.email}
                  required
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
                  error={subjectError}
                  helperText={errorMessages.subject}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="message"
                  label="Message"
                  name="message"
                  multiline
                  rows={3}
                  autoComplete="off"
                  error={messageError}
                  helperText={errorMessages.message}
                  value={formValues.message}
                  onChange={handleChange}
                  required
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

      <div className={classes.snackBarRoot}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            The message has been sucessfully sent
          </Alert>
        </Snackbar>
      </div>
    </Layout>
  )
}

export default Contact
