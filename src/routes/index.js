import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import CaseStudy from "../pages/CaseStudy";
import HanhTrinhKinhDoanh from "../pages/HanhTrinhKinhDoanh";
import Home from "../pages/Home";
import Humans from "../pages/Humans";
import Magazine from "../pages/Magazine";
import SuKien from "../pages/SuKien";
import TinTuc from "../pages/TinTuc";
import TuyenDung from "../pages/TuyenDung";

export const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "tin-tuc",
                element: <TinTuc />,
            },
            {
                path: "su-kien",
                element: <SuKien />,
            },
            {
                path: "case-study",
                element: <CaseStudy />,
            },
            {
                path: "tuyen-dung",
                element: <TuyenDung />,
            },
            {
                path: "humans",
                element: <Humans />,
            },
            {
                path: "magazine",
                element: <Magazine />,
            },
            {
                path: "hanh-trinh-kinh-doanh",
                element: <HanhTrinhKinhDoanh />,
            },
            {
                path: "*",
                element: <Navigate to="/" />,
            },
        ]
    }
]