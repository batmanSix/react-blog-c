import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/api'
import '../static/style/components/header.css'

import { Row, Col, Menu, Icon } from 'antd'
const Header = (props) => {
    const [navArray, setNavArray] = useState([])
    useEffect(() => {

        const fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then(
                (res) => {
                    setNavArray(res.data.data)
                    return res.data.data
                }
            )
            setNavArray(result)
        }
        fetchData()


    }, [])

    console.log(props)

    // 改变路由地址
    const handleClick = (e) => {
        if (e.key == 0) {
            Router.push('/')
        } else {
            console.log(e.key)
            Router.push('/list?id=' + e.key)
        }


    }
    return (

        <div className='antffix'>
            <div className="header">
                <Row type="flex" justify="center">
                    <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                        <span className="header-logo">神毓逍遥 </span>
                        <span className="header-txt">一个喜欢奥迪的男人</span>
                    </Col>

                    <Col className="memu-div" xs={0} sm={0} md={14} lg={10} xl={7}>
                        <Menu
                            mode="horizontal"
                            onClick={handleClick}
                        >
                            <Menu.Item key="0">
                                <Icon type="home" />
                            博客首页
                        </Menu.Item>
                            {
                                navArray.map((item) => {
                                    return (
                                        <Menu.Item key={item.id}>
                                            <Icon type={item.icon} />
                                            {item.typeName}
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Header