import { useQuery } from "@tanstack/react-query";
import { getRole } from "../api/auth";
import useAuth from "./useAuth";

const useRole = () => {
  const { user, loading } = useAuth();

  const { data: role, isLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryFn: async () => await getRole(user?.email),
    queryKey: ["role"],
  });
  return [role, isLoading];
};

export default useRole;

// const [role, setRole] = useState();
// const [loading, setLoading] = useState(true);
// useEffect(() => {
//   getRole(user?.email).then((data) => {
//     setRole(data);
//     setLoading(false);
//   });
// }, [user]);
// return [role, loading];
