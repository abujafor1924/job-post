import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Profile from "../tabs/Profile";

import Experience from "../tabs/Experience";
import Top from "../tabs/Top";
import Blog from "../tabs/Blog";
import JobPost from "../tabs/JobPost";
import Jobsek from "../tabs/Jobsek";
import JobCompany from "../tabs/JobCompany";
const Tabils = () => {
  return (
    <Tabs>
      <h1 className="text-4xl font-bold text-center my-6 text-gray-900">
        Discover jobs for you
      </h1>
      <p className="text-2xl font-normal text-center my-6 text-green-700">
        Browse 200+ Top Jobs In Your Local City.
      </p>
      <TabList>
        <Tab>All Jobs</Tab>
        <Tab>Job poster</Tab>
        <Tab>Fresher Jobs</Tab>
        <Tab> Experienced Jobs</Tab>
        <Tab> Top IT Companies</Tab>
        <Tab> My Profile</Tab>
        <Tab>Blog</Tab>
      </TabList>

      <TabPanel>
        <Jobsek />
      </TabPanel>
      <TabPanel>
        <JobPost />
      </TabPanel>
      <TabPanel>
        <JobCompany />
      </TabPanel>
      <TabPanel>
        <Experience />
      </TabPanel>
      <TabPanel>
        <Top />
      </TabPanel>
      <TabPanel>
        <Profile />
      </TabPanel>
      <TabPanel>
        <Blog />
      </TabPanel>
    </Tabs>
  );
};

export default Tabils;
