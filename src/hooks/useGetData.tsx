import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../services/axiosInstance";
const fetchData = async (url: string, params?: any) => {
    const res = await axiosInstance.get("/api/v1" + url, { params });
    return res.data;
};

export default function useGetData({ key, url, params }: { key: string, url: string, params?: any }) {
    return useQuery({
        queryKey: [key, params],
        queryFn: () => fetchData(url, params),
    });
}