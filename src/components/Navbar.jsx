import React,{useState, useEffect} from 'react';
import { Button, Menu, Typography,Avatar} from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, AntCloudOutlined } from '@ant-design/icons';
import icon from "../images/cryptoranking.png"

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    useEffect(() => {
        if (screenSize < 768) {
            setActiveMenu(false);
        }
        else {
            setActiveMenu(true);
        }
    },[screenSize])
    return (
        <div className="nav-container">
            <div className="logo-container">
             <Avatar src={icon} size="large" />
             {/* <img src="../images/crytocurrency.png" size="large" /> */}
                <Typography.Title level={2} className="logo">
                    <Link to="/">cryptoranking</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined/>
                </Button>
            </div>
            {activeMenu && (
                            <Menu theme="dark" mode="inline">
                            <Menu.Item icon={<HomeOutlined />}>
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item icon={<FundOutlined />}>
                                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                            </Menu.Item>
                            {/* <Menu.Item icon={<MoneyCollectOutlined />}>
                                <Link to="/exchanges">Exchanges</Link>
                            </Menu.Item> */}
                            <Menu.Item icon={<BulbOutlined />}>
                                <Link to="/crypto-news">Crypto News</Link>
                            </Menu.Item>
                        </Menu>
            )}
        </div>
    );
}

export default Navbar