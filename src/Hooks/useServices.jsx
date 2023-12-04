
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useServices = (token) => {    
    console.log(token);
    const { data: services = [], isLoading, refetch } = useQuery({
        queryKey: [token],
        queryFn: () =>
            axios
                .get(`http://api.uicommercial.com/api/services`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }
                })
                .then((res) => res.data),
    })

    return [services, isLoading, refetch];
};

export default useServices;
