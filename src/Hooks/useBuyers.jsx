
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useBuyers = (token) => {
    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: [token],
        queryFn: () =>
            axios
                .get(`http://api.uicommercial.com/api/buyers`, {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json',
                    }
                })
                .then((res) => res.data),
    })

    return [buyers, isLoading, refetch];
};

export default useBuyers;