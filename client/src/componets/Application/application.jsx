import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Card from "react-bootstrap/Card";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";

import {
  Grid,
  TextField,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { Link } from "react-router-dom";
// import { ErrorMessage, SuccessMessage } from "../Errormsg/errormsg";

function Incubation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [team, setTeam] = useState("");
  const [product, setProduct] = useState("");
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");
  const [proposition, setProposition] = useState("");
  const [competators, setCompetators] = useState("");
  const [revenue, setRevenue] = useState("");
  const [market, setMarket] = useState("");
  const [plan, setPlan] = useState("");
  const [proposal, setProposal] = useState("");
  const [type, setType] = useState("");
  const [confirmation, setConfimration] = useState("");
  const [error, setError] = useState("");

  // const info = JSON.parse(localStorage.getItem("userInfo"));
  const theme = createTheme({
    status: {
      danger: "#100505",
    },
    palette: {
      primary: {
        main: "#9fef8d",
        darker: "#699842",
      },
      neutral: {
        main: "#dcd0d0",
        contrastText: "#dcd0d0",
      },
    },
  });

  const [Status, setStatus] = useState([]);
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const userId = cookies.jwt;
    try {
      const data = {
        name,
        email,
        address,
        city,
        state,
        phoneNo,
        companyName,
        team,
        product,
        problem,
        solution,
        proposition,
        competators,
        revenue,
        market,
        plan,
        type,
        proposal,
        userId,
        // auth,
      };
      const application = await axios.post(
        "http://localhost:4000/userApplication",
        data
      );
      console.log(application);
      if (application.data.errors) {
        const errorappi = application.data.errors.application;
        toast(errorappi, { theme: "dark" });
      } else {
        navigate("/");
        toast("Application submited", { theme: "dark" });
      }
      setName("");
      setEmail("");
      setAddress("");
      setCity("");
      setState("");
      setPhoneNo("");
      setCompanyName("");
      setTeam("");
      setProduct("");
      setProblem("");
      setSolution("");
      setProposition("");
      setCompetators("");
      setRevenue("");
      setMarket("");
      setPlan("");
      setProposal("");
      setType("");
    } catch (err) {
      setError("Please fill all the fields");
    }
  };

  return (
    <div>
      <div style={{ padding: 30 }}>
        <h1>New Application</h1>
        <Form onSubmit={submitHandler}>
          <Grid container spacing={3}>
            <Grid item sm={6} xs={12}>
              <TextField
                className="text"
                margin="normal"
                required
                fullWidth
                label="Name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                className="text"
                margin="normal"
                required
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                className="text"
                margin="normal"
                required
                fullWidth
                label="Address"
                name="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                className="text"
                margin="normal"
                required
                fullWidth
                label="City"
                name="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                className="text"
                margin="normal"
                required
                fullWidth
                label="State"
                name="state"
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                className="text"
                margin="normal"
                required
                fullWidth
                label="Phone no"
                type="number"
                name="phoneno"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                className="text"
                margin="normal"
                required
                fullWidth
                label="Company name"
                type="text"
                name="companyname"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </Grid>
         
            <Grid item xs={12}>
              <TextField
                className="text"
                margin="normal"
                required
                fullWidth
                label="Describe your team and background"
                type="text"
                name="team"
                value={team}
                onChange={(e) => setTeam(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="text"
                margin="normal"
                required
                fullWidth
                label="Describe your Company and Product"
                type="text"
                name="companyandproduct"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="text"
                margin="normal"
                required
                fullWidth
                label="Describe the problem you are trying to solve"
                type="text"
                name="problem"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="text"
                margin="normal"
                required
                fullWidth
                label="What is unique about your solution"
                type="text"
                name="solution"
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="text"
                margin="normal"
                required
                fullWidth
                label="What is your value proposition for the customer"
                type="text"
                name="valueproposition"
                value={proposition}
                onChange={(e) => setProposition(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="text"
                margin="normal"
                required
                fullWidth
                label="Who are your competators and what is your competatiev advantage?"
                type="text"
                name="competators"
                value={competators}
                onChange={(e) => setCompetators(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="text"
                margin="normal"
                required
                fullWidth
                label="Explain your revenue model"
                type="text"
                name="revenue"
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="text"
                margin="normal"
                required
                fullWidth
                label="What is the potential market size of the product?"
                type="text"
                name="potentialmarketsize"
                value={market}
                onChange={(e) => setMarket(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="text"
                margin="normal"
                required
                fullWidth
                label="How do you market or plan to market your products and services?"
                type="text"
                name="plan"
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel id="demo-radio-buttons-group-label">
                Type of incubation needed
              </FormLabel>
              <br />
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Physical Incubation"
                    name="select"
                    type={type}
                    value={"Physical"}
                    onClick={(e) => setType(e.target.value)}
                    required
                  />
                  <Form.Check
                    inline
                    label="Virtual Incubation"
                    name="select"
                    type={type}
                    value={"Virtual"}
                    onClick={(e) => setType(e.target.value)}
                  />
                </div>
              ))}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="text"
                margin="normal"
                required
                fullWidth
                label="Give a detailed business proposal"
                type="text"
                name="businessproposal"
                value={proposal}
                onChange={(e) => setProposal(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                className="button"
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
          {/* {error ? <ErrorMessage variant="primary">{error}</ErrorMessage> : " "} */}
          {/* {confirmation ? (
            <SuccessMessage variant="success">{confirmation}</SuccessMessage>
          ) : (
            " "
          )} */}
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Incubation;
