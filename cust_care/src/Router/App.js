import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import App from "../webcomp/app";
import IndexAdmin from "../layouts/admin/indexAdmin";
import IndexCust from "../layouts/customers/indexCust";
import IndexAgents from "../layouts/agents/indexAgents";
import { OrgSignup } from "../Signup/register/Orgregister/components/OrgSignup";
import { CustSignup } from "../Signup/register/CustRegister/components/CustSignup";
import { OrgLogin } from "../Signup/login/OrgLogin/components/OrgLogin";
import { CustLogin } from "../Signup/login/CustLogin/components/CustLogin";
import PageErr from "../ErrorBoundary/PageErr";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Dashboard from "../Container/agents/Dashboard";
import LayoutAgent from "../MainLayout/LayoutAgent";
import LayoutCustomer from "../MainLayout/LayoutCustomer";
import Tickets from "../Container/agents/Tickets";
import TicketDetails from "../Container/agents/TicketDetails";
import CustomerSubmitQuery from "../Container/Customer/SubmitTickets/index.js";
import CustomerTickets from "../Container/Customer/Tickets/index.js";
import CustomerProfile from "../Container/Customer/Profile/index.js";
import CustomerOrganization from "../Container/Customer/Organization copy/index";

import Customers from "../Container/admin/Customers";
import Notifications from "../Container/agents/Notifications";
import Profile from "../Container/agents/Profile";
import DashboardAdmin from "../Container/admin/DashboardAdmin";
import TicketsAdmin from "../Container/admin/TicketsAdmin";
import AgentsAdmin from "../Container/admin/AgentsAdmin";
import NotificationsAdmin from "../Container/admin/NotificationsAdmin";
import OrgProfileAdmin from "../Container/admin/OrgProfileAdmin";
import AddAgents from "../Container/admin/AddAgent/AddAgents";
import AgentLogin from "../Signup/login/AgentLogin/AgentLogin";
import CustomersAdmin from "../Container/admin/Customers";
import MyTickets from "../Container/agents/MyTickets";

import ChatBot1 from "../Container/Customer/Organization copy/chatbot1";

class Routerapp extends React.Component {
  render() {
    const admin = localStorage.getItem("orgname");
    const AgentOrgName = localStorage.getItem("AgentOrgname");
    const customer = localStorage.getItem("custname");
    const path = `/organization/${admin}/admin/`;
    const agent = localStorage.getItem("agentname");
    console.log(admin);

    return (
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/organization/register" element={<OrgSignup />} />
          <Route path="/organization/login" element={<OrgLogin />} />
          <Route path="/customer/login" element={<CustLogin />} />
          <Route path="/customer/register" element={<CustSignup />} />

          <Route
            path={`/organization/${admin}/admin/`}
            element={<DashboardAdmin />}
          />
          <Route
            path={`/${AgentOrgName}/agent/${agent}`}
            element={<Dashboard />}
          />
          <Route
            path={`/${AgentOrgName}/agent/${agent}/dashboard/`}
            element={<Dashboard />}
          />
          <Route
            path={`/${AgentOrgName}/agent/${agent}/tickets/`}
            element={<Tickets />}
          />
          <Route
            path={`/${AgentOrgName}/agent/${agent}/mytickets`}
            element={<MyTickets />}
          />
          <Route path="/customer" element={<LayoutCustomer />} />
          <Route path={`/organization/agent/login`} element={<AgentLogin />} />
          <Route
            path={`/organization/${admin}/admin/customers/`}
            element={<CustomersAdmin />}
          />
          <Route
            path={`/${AgentOrgName}/agent/${agent}/notifications/`}
            element={<Notifications />}
          />
          <Route
            path={`/${AgentOrgName}/agent/${agent}/profile/`}
            element={<Profile />}
          />
          <Route path="*" element={<PageErr />} />
          <Route
            path={`/${AgentOrgName}/agent/${agent}/tickets/:id`}
            element={<TicketDetails />}
          ></Route>
          <Route
            path={`/customer/${customer}/tickets/`}
            element={<CustomerTickets />}
          />
          <Route
            path={`/customer/${customer}/submittickets`}
            element={<CustomerSubmitQuery />}
          />

          <Route
            path={`/customer/${customer}/organizations`}
            element={<CustomerOrganization />}
          />

          <Route
            path={`/customer/${customer}/organizations/:id/chatbot/`}
            element={<ChatBot1 />}
          />

          <Route
            path={`/customer/${customer}/profile`}
            element={<CustomerProfile />}
          />
          <Route
            path={`/customer/${customer}/tickets/`}
            element={<CustomerTickets />}
          />
          <Route
            path={`/organization/${admin}/admin/dashboard`}
            element={<DashboardAdmin />}
          />
          <Route
            path={`/organization/${admin}/admin/tickets`}
            element={<TicketsAdmin />}
          />
          <Route
            path={`/organization/${admin}/admin/agents`}
            element={<AgentsAdmin />}
          />
          <Route
            path={`/organization/${admin}/admin/notifications`}
            element={<NotificationsAdmin />}
          />
          <Route
            path={`/organization/${admin}/admin/profile`}
            element={<OrgProfileAdmin />}
          />
          <Route
            path={`/organization/${admin}/admin/addagents`}
            element={<AddAgents />}
          />
        </Routes>
      </Router>
    );
  }
}

export default Routerapp;
