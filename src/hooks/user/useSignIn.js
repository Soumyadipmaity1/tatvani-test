import {
    useMutation,
    useQuery, useQueryClient
} from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast';


export default async function useSignIn(data) {
    const queryClient = useQueryClient();

    const userMutation = useMutation({
        mutationFn: async (data) => {

            const res = await axios.post("/api/users/sign-in", {
                email: data.email,
                password: data.password
            });
            return res;
        },
        onSuccess: () => {
            toast.success("User signed in");
            queryClient.invalidateQueries(["user"]);
        },
        onError: (error) => {
            toast({
                description: error.response?.data?.error || "An error occurred",
                variant: "destructive",
            });
        },
    })

    return userMutation;
}
