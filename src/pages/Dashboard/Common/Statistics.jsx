import { Helmet } from "react-helmet-async";
import useRole from "../../../hooks/useRole";
import AdminStatistics from "../../../components/Dashboard/Statistics/AdminStatistics";
import HostStatistics from "../../../components/Dashboard/Statistics/HostStatistics";
import GuestStatistics from "../../../components/Dashboard/Statistics/GuestStatistics";

const Statistics = () => {
  // =================================================================
  const [role] = useRole();
  console.log(role);

  // =================================================================
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      {role === "admin" && <AdminStatistics />}
      {role === "host" && <HostStatistics />}
      {role === "guest" && <GuestStatistics />}
    </div>
  );
};

export default Statistics;
