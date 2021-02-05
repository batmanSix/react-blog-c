
import {Avatar,Divider} from 'antd'
import '../static/style/components/author.css'
const Author =()=>{
    const godetail = () =>{
        window.location.href="https://github.com/batmanSix" 
    }
    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="../image/avater.png"  /></div>
            <div className="author-introduction">
                健身程序员
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account" onClick={godetail}/>
                <Avatar size={28} icon="qq"  className="account" />
                <Avatar size={28} icon="wechat"  className="account"  />
                <Avatar size={28} icon="WeiboCircleOutlined"  className="account"  />
            </div>
        </div>
    )
}

export default Author