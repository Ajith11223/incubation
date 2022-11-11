import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { useInRouterContext, useNavigate } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useContext } from "react";
import {AuthContext} from "../../Stor/TokenContext";

function ListGroupExample() {
  const [Status, setStatus] = useState(null);
  const [userName, setuserName] = useState("");
  const [applicationId, setapplicationId] = useState("");
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  let info;
  const {userdata} =useContext(AuthContext)
  const token = cookies.jwt;
  
  
  const getStatus = async () => {
    const { data } = await axios.post("http://localhost:4000",{},{ withCredentials: true });
      setuserName(data.user)
    let applicationData = await axios.get(
      `http://localhost:4000/status/${token}`
    );
    if(applicationData.data.status){
      setStatus(applicationData.data.data);
      setapplicationId(applicationData.data
        );
      }

  };
  useEffect(() => {
    getStatus();
  }, []);
  return (
    <div
      className="mt-5"
      style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      <Card
        sx={{ maxWidth: 500, minWidth: 500, minWidth: 500, maxWidth: 500 }}
        className="mt-5 card  shadow m-5"
      >
        <CardContent style={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
             {userName} Welcome to Brototye
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
        {Status !== null ? (
          <div className="p-1">
            <div className="mb-4"> Applications Status</div>
            <ProgressBar>
              {Status === "New" ? (
                <ProgressBar
                  striped
                  variant="success"
                  label="in-progress"
                  now={35}
                  key={1}
                />
              ) : (
                ""
              )}
              {Status === "Pending" ? (
                <ProgressBar
                  striped
                  variant="warning"
                  label="Pending"
                  now={70}
                  key={1}
                />
              ) : (
                ""
              )}
              {Status === "Approved" ? (
                <ProgressBar
                  striped
                  variant="success"
                  label="Approved"
                  now={100}
                  key={1}
                />
              ) : (
                ""
              )}
              {Status === "Rejected" ? (
                <ProgressBar
                  striped
                  variant="danger"
                  label="Rejected"
                  now={100}
                  key={1}
                />
              ) : (
                ""
              )}
              {Status === "Booked" ? (
                <ProgressBar
                  striped
                  variant="primary"
                  label="Your Slot is Booked"
                  now={100}
                  key={1}
                />
              ) : (
                ""
              )}
            </ProgressBar>
            <div className="mt-4">
              <p
                className="btn btn-light"
                style={{
                  
                  color: "turquoise",
                  textAlign: "center",
                }}
                onClick={() => { 
                  navigate("/viewapplication");
                  localStorage.setItem(
                    "appId",
                    JSON.stringify([applicationId.id])
                  );
                }}
              >
                View Application
                </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </Card>
    </div>
  );
}

export default ListGroupExample;
