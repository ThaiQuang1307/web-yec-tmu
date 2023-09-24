import { Modal } from "antd";
import { useState } from "react";
import { BsList } from "react-icons/bs";
import "./MenuResponsive.scss"
import { Link } from "react-router-dom";

function MenuResponsive() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    }
    return (
        <>
            <BsList onClick={showModal} />
            <Modal className="modalStyle" title="clb nhà kinh tế trẻ" footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <ul className="menu-responsive">
                    <li className="menu-responsive__item">
                        <Link to="/tin-tuc" onClick={closeModal}>
                            Tin tức
                        </Link>
                    </li>
                    <li className="menu-responsive__item">
                        <Link to="/su-kien" onClick={closeModal}>
                            Sự kiện
                        </Link>
                    </li>
                    <li className="menu-responsive__item">
                        <Link to="/case-study" onClick={closeModal}>
                            Case study
                        </Link>
                    </li>
                    <li className="menu-responsive__item">
                        <Link to="/tuyen-dung" onClick={closeModal}>
                            Tuyển dụng
                        </Link>
                    </li>
                    <li className="menu-responsive__item">
                        <Link to="/humans" onClick={closeModal}>
                            Humans
                        </Link>
                    </li>
                    <li className="menu-responsive__item">
                        <Link to="/magazine" onClick={closeModal}>
                            Y-Magazine
                        </Link>
                    </li>
                    <li className="menu-responsive__item">
                        <Link to="/hanh-trinh-kinh-doanh" onClick={closeModal}>
                            Hành trình kinh doanh
                        </Link>
                    </li>
                </ul>
            </Modal>
        </>
    )
}

export default MenuResponsive