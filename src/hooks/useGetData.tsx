import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import axiosInstance from "../services/axiosInstance";
const fetchData = async (url: string, params?: any) => {
    const res = await axiosInstance.get("/api/v1" + url, { params });
    return res.data;
};

export default function useGetData<T>({ key, url, params }: { key: string, url: string, params?: any }): UseQueryResult<T> {
    return useQuery({
        queryKey: [key, url, params?.category_id], 
        queryFn: () => fetchData(url, params),
        staleTime: 50000
    });
}