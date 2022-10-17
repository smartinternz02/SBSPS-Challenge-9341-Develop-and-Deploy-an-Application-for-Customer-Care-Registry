const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const userAuth = require("./basicAuth");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const { reset } = require("nodemon");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const twilio = require("twilio")(
  "ACb1743f1f69b6964ce22fcd16db29a965",
  "f19ea456b5157567ed467d12c86ad8ea"
);
// const cookieParser = require('cookie-parser')
// const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: "My Name is Nishanth",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config({ path: "./password.env" });
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cust_care",
});

db.connect((err) => {
  if (err) {
    console.log("DB not connected");
  } else {
    console.log("Db connected");
  }
});

app.post("/call", (req, res) => {
  const number = req.body.number;

  twilio.calls
    .create({
      url: "http://demo.twilio.com/docs/voice.xml",
      to: "+91" + number,
      from: "+16203159896",
    })
    .then((call) => console.log(call.sid))
    .catch((err) => {
      console.log(err);
    });
});

// Organization Register

app.post("/signuporg", (req, res) => {
  const orgname = req.body.orgname;
  const email = req.body.email;
  const number = req.body.number;
  const password = req.body.password;
  const confirmpassword = req.body.confirmpassword;
  const street = req.body.street;
  const city = req.body.city;
  const region = req.body.region;
  const zip = req.body.zip;
  const website = req.body.website;
  const gst = req.body.gst;

  const querystatement =
    "INSERT INTO org_reg(org_name,email, number, org_pass, street, city, region, zip, website, gst) VALUES (?,?,?,?,?,?,?,?,?,?)";

  db.query(
    querystatement,
    [orgname, email, number, password, street, city, region, zip, website, gst],
    (err, response) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ orgname: orgname });
        console.log(response);
      }
    }
  );
});

// Customer Register

app.post("/signupcust", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;
  const confirmpassword = req.body.confirmpassword;
  const number = req.body.number;
  const region = req.body.region;

  bcrypt.hash(password, 8, (err, hash) => {
    if (err) {
      console.log(err);
    }

    const querytatement =
      "INSERT INTO cust_reg(firstname,lastname, email,cust_password,number, region) VALUES (?,?,?,?,?,?)";

    db.query(
      querytatement,
      [firstname, lastname, email, hash, number, region],
      (err, response) => {
        if (err) {
          console.log(err);
        } else {
          res.send({ name: firstname });
          console.log("success");
        }
      }
    );
  });
});

// Organization Login

app.post("/loginorg", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const logincust = "SELECT * FROM org_reg WHERE email=?";
  db.query(logincust, [email], (err, response) => {
    if (err) {
      res.send({ message: "Error Occured" });
    }

    if (response.length > 0) {
      if (response[0].org_pass == password) {
        res.send({ message: "Correct", orgname: response[0].org_name });
      } else {
        res.send({
          message: "Wrong username/Password Combination",
        });
      }
    } else {
      res.send({ message: "User doesn't exist" });
    }
  });
});

//Customer Login

app.post("/logincust", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const logincust = "SELECT * FROM cust_reg WHERE email=?";
  db.query(logincust, [email, password], (err, response) => {
    if (err) {
      res.send({ message: "Error Occured" });
      console.log("Error" + err);
    }

    if (response.length > 0) {
      bcrypt.compare(password, response[0].cust_password, (err, result) => {
        if (result) {
          res.send({ message: "Correct", name: response[0].firstname });
        } else {
          res.send({ message: "Wrong username/Password Combination" });
          console.log(result);
        }
      });
    } else {
      res.send({ message: "User doesn't exist" });
      console.log("Wrong username/Password Combination");
      console.log(response);
    }
  });
});

// AddAgents

app.post("/addagents", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const number = req.body.number;
  const email = req.body.email;
  const password = req.body.password;
  const orgname = req.body.orgname;
  const date = req.body.date;

  bcrypt.hash(password, 8, (err, hash) => {
    if (err) {
      console.log(err);
    } else {
      const addagentStatement =
        "INSERT INTO agents( firstname, lastname,number, email, password, organization,date) VALUES (?,?,?,?,?,?,?)";
      db.query(
        addagentStatement,
        [firstname, lastname, number, email, hash, orgname, date],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
            res.send({ message: "Success" });
          }
        }
      );
    }
  });
});

// Admin AgentsList

app.post("/organization/admin/agents", (req, res) => {
  const orgname = req.body.orgname;
  const query = "SELECT * FROM agents WHERE organization=? ";
  db.query(query, [orgname], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: result });
    }
  });
});

//Agent Login

app.post("/loginagent", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const query = "SELECT * FROM agents WHERE email=?";

  db.query(query, [email], (err, result) => {
    if (err) {
      res.send({ message: "Error Occured" });
      console.log(err);
    }

    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (err, response) => {
        if (response) {
          res.send({
            message: "Correct",
            name: result[0].firstname + result[0].lastname,
            orgname: result[0].organization,
          });
        } else {
          res.send({ message: "Wrong username/Password Combination" });
          console.log(response);
        }
      });
    } else {
      res.send({ message: "User doesn't exist" });
      console.log("Wrong username/Password Combination");
      console.log(result);
    }
  });
});

//Agent Dashboard

// app.post("/agent/chart", (req, res) => {
//   const agentname = req.body.agentname;
//   const query = "SELECT * FROM";
//   db.query();
// });

//Submit Query

app.post("/submitquerycust", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const orgname = req.body.orgname;
  const phonenumber = req.body.phonenumber;
  const query = req.body.query;
  const region = req.body.region;
  const status = req.body.status;
  const taken = req.body.taken;
  const submitquery =
    "INSERT INTO subitquery_cust( name,  email, orgname,phonenumber, query,region,agentname,status,taken) VALUES (?,?,?,?,?,?,?,?,?)";
  db.query(
    submitquery,
    [name, email, orgname, phonenumber, query, region, "", status, taken],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send({ message: "Success", name: name });
      }
    }
  );
});

// Admin TicketsList

app.post("/organization/admin/tickets", (req, res) => {
  const orgname = req.body.orgname;
  const query = "SELECT * FROM subitquery_cust WHERE orgname=? ";
  db.query(query, [orgname], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: result });
    }
  });
});

// Agent Ticket List

app.post("/organization/agent/tickets", (req, res) => {
  const orgname = req.body.orgname;
  const taken = "not_taken";
  const query = "SELECT * FROM subitquery_cust WHERE orgname=? AND taken=? ";
  db.query(query, [orgname, taken], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: result });
    }
  });
});

//Agent Ticket List Taken UpdAter

app.post("/organization/agent/tickets/takenupdate", (req, res) => {
  const id = req.body.id;
  const agentname = req.body.agentname;
  const taken = "taken";
  const query = "UPDATE subitquery_cust SET taken=?,agentname=? WHERE id=? ";
  db.query(query, [taken, agentname, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: result });
    }
  });
});

//Agent Ticket List Taken Email UpdAter

app.post("/organization/agent/tickets/takenemailupdate", (req, res) => {
  const id = req.body.id;
  const agentname = req.body.agentname;
  const query = "SELECT * FROM subitquery_cust WHERE id=? ";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.log("Error in Submit Query");
    } else {
      console.log(result[0].email, result[0].orgname);

      const querystatement = "SELECT * from org_reg where org_name=?";
      db.query(querystatement, [result[0].orgname], (err, resultData) => {
        if (err) {
          console.log("Error in Second");
        } else {
          console.log(resultData[0].org_pass, resultData[0].email);
          const sender = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: resultData[0].email,
              pass: resultData[0].org_pass,
            },
          });

          const composeMail = {
            from: resultData[0].email,
            to: result[0].email,
            subject: result[0].query,
            html: `<h1>Hello ${result[0].name},</h1><p style="font-size:20px">Your query "${result[0].query}" had been allocated to ${result[0].agentname}</p><p style="font-size:20px">You can see the status of your query in your tickets panel.</p>
          <p style="font-size:20px">Thank you for contacting us</p>`,
          };

          sender.sendMail(composeMail, (err, info) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Mail sent successfully" + info.response);
              res.send({ message: "Mail sent Successfully" });
            }
          });
        }
      });
    }
  });
});

//Agent Ticket List Solved Email UpdAter

app.post("/organization/agent/tickets/solvedemailupdate", (req, res) => {
  const id = req.body.id;
  const agentname = req.body.agentname;
  const query = "SELECT * FROM subitquery_cust WHERE id=? ";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.log("Error in Submit Query");
    } else {
      console.log("first" + result[0].email, result[0].orgname);

      const querystatement = "SELECT * from org_reg where org_name=?";
      db.query(querystatement, [result[0].orgname], (err, resultData) => {
        if (err) {
          console.log("Error in Second");
        } else {
          console.log(resultData[0].org_pass, resultData[0].email);
          const sender = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: resultData[0].email,
              pass: resultData[0].org_pass,
            },
          });

          const composeMail = {
            from: resultData[0].email,
            to: result[0].email,
            subject: result[0].query,
            html: `<h1>Hello ${result[0].name},</h1><p style="font-size:20px">Your query "${result[0].query}" had been solved successfully.</p>
          <p style="font-size:20px">Thank you for contacting us</p>`,
          };

          sender.sendMail(composeMail, (err, info) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Mail sent successfully" + info.response);
              res.send({ message: "Mail sent Successfully" });
            }
          });
        }
      });
    }
  });
});

//Agent MyTickets

app.post("/organization/agent/mytickets", (req, res) => {
  const agentname = req.body.agentname;
  const orgname = req.body.orgname;
  const query = "SELECT * from subitquery_cust WHERE agentname=? && orgname=?";
  db.query(query, [agentname, orgname], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: result });
    }
  });
});

// Agent MyTickets Status Update
app.post("/organization/agent/mytickets/statusupdate", (req, res) => {
  const id = req.body.id;
  const agentname = req.body.agentname;
  const orgname = req.body.orgname;
  const status = "In Progress";
  const query = "UPDATE subitquery_cust SET status=? WHERE id=? ";
  db.query(query, [status, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: result });
    }
  });
});

// Agent MyTickets Solve Update
app.post("/organization/agent/mytickets/solveupdate", (req, res) => {
  const id = req.body.id;
  const agentname = req.body.agentname;
  const orgname = req.body.orgname;
  const status = "Solved";
  const query = "UPDATE subitquery_cust SET status=? WHERE id=? ";
  db.query(query, [status, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: result });
    }
  });
});

// Agent Dashboards Raised Tickets

app.post("/agent/dashboard/raisedtickets", (req, res) => {
  const orgname = req.body.orgname;

  const query = "SELECT * from subitquery_cust WHERE orgname=?";

  db.query(query, [orgname], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: result });
      console.log(result);
    }
  });
});

// Agent Dashboards Solved Tickets

app.post("/agent/dashboard/solvedtickets", (req, res) => {
  const orgname = req.body.orgname;
  const agentname = req.body.agentname;
  const status = "solved";
  const query =
    "SELECT * from subitquery_cust WHERE agentname=? && orgname=? && status=? ";

  db.query(query, [agentname, orgname, status], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: result });
      console.log(result);
    }
  });
});

// Agent Dashboards Unsolved Tickets

app.post("/agent/dashboard/unsolvedtickets", (req, res) => {
  const orgname = req.body.orgname;
  const agentname = req.body.agentname;
  const status = "pending";
  const query =
    "SELECT * from subitquery_cust WHERE agentname=? && orgname=? && status=? ";

  db.query(query, [agentname, orgname, status], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: result });
      console.log(result);
    }
  });
});
// Admin Customers

app.post("/admin/customers", (req, res) => {
  const orgname = req.body.orgname;

  const query = "SELECT * FROM subitquery_cust WHERE orgname=? ";
  db.query(query, [orgname], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: result });
    }
  });
});

// Admin Dashboards Raised Tickets

app.post("/admin/dashboard/raisedtickets", (req, res) => {
  const orgname = req.body.orgname;

  const query = "SELECT * from subitquery_cust WHERE  orgname=?";

  db.query(query, [orgname], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: result });
      console.log(result);
    }
  });
});

// Admin Dashboards Solved Tickets

app.post("/admin/dashboard/solvedtickets", (req, res) => {
  const orgname = req.body.orgname;
  const status = "solved";
  const query = "SELECT * from subitquery_cust WHERE  orgname=? && status=? ";

  db.query(query, [orgname, status], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: result });
      console.log(result);
    }
  });
});

// Admin Dashboards Unsolved Tickets

app.post("/admin/dashboard/unsolvedtickets", (req, res) => {
  const orgname = req.body.orgname;
  const status = "pending";
  const query = "SELECT * from subitquery_cust WHERE orgname=? && status=? ";

  db.query(query, [orgname, status], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: result });
      console.log(result);
    }
  });
});

// Customer Dashboards Raised Tickets

app.post("/customer/dashboard/raisedtickets", (req, res) => {
  const custname = req.body.custname;

  const query = "SELECT * from subitquery_cust WHERE name=?";

  db.query(query, [custname], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: result });
    }
  });
});

// Customer Dashboards Solved Tickets

app.post("/customer/dashboard/solvedtickets", (req, res) => {
  const custname = req.body.custname;
  const status = "solved";
  const query = "SELECT * from subitquery_cust WHERE name=? && status=? ";

  db.query(query, [custname, status], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: result });
    }
  });
});

// organisations list

app.post("/organizations", (req, res) => {
  const query = "SELECT * FROM org_reg ";
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: result });
    }
  });
});

//chatbot

app.post("/chatbot1", (req, res) => {
  botmsg = req.body.botmsg;
  humanmsg = req.body.humanmsg;
  customer = req.body.customer;
  organization = req.body.organization;

  const querytatement =
    "INSERT INTO chatbot1(botmsg,humanmsg,customer,organization) VALUES (?,?,?,?)";

  db.query(
    querytatement,
    [botmsg, humanmsg, customer, organization],
    (err, response) => {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
      }
    }
  );
});

//cust_profile
app.post("/profile", (req, res) => {
  const custemail = req.body.custemail;
  const query = "SELECT * FROM cust_reg WHERE email=?";
  db.query(query, [custemail], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: result });
      console.log(result);
    }
  });
});

//cust_updateprofile
app.post("/updateprofile", (req, res) => {
  const custemail = req.body.custemail;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const phonenumber = req.body.phonenumber;
  const region = req.body.region;

  const query =
    "UPDATE cust_reg  SET firstname = ?, lastname = ?, email = ?,number = ?, region =?  WHERE email=?";
  db.query(
    query,
    [firstname, lastname, email, phonenumber, region, custemail],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ message: result });
      }
    }
  );
});

// chatbot get

app.post("/chatbot1/get", (req, res) => {
  const query = "SELECT * FROM chatbot1 ";
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: result });
    }
  });
});

// chatbot delete msg

app.post("/chatbot1/deleteMsg", (req, res) => {
  customer = req.body.customer;
  organization = req.body.organization;

  const query = `DELETE FROM chatbot1 WHERE customer = organization = "${organization}" `;
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: result });
    }
  });
});

app.post("/organizations/chatbotorgname", (req, res) => {
  const local = req.body.botorg_name;

  return res.then((res) => {
    res.send({ botorg_name: local });
  });
});

// Customer Dashboards Unsolved Tickets

app.post("/customer/dashboard/unsolvedtickets", (req, res) => {
  const custname = req.body.custname;
  const status = "pending";
  const query = "SELECT * from subitquery_cust WHERE name=? && status=? ";

  db.query(query, [custname, status], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: result });
    }
  });
});

// Customer Ticket List

app.post("/customer/tickets", (req, res) => {
  const customername = req.body.customername;
  const query = "SELECT * FROM subitquery_cust WHERE name=? ";
  db.query(query, [customername], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: result });
    }
  });
});
app.listen(8080, () => {
  console.log("====================================");
  console.log("Server Running on port 8080");
  console.log("====================================");
});
