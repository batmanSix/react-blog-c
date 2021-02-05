import '../static/style/components/advert.css'
import { Avatar,Divider,Tabs, Icon } from 'antd';
const { TabPane } = Tabs;
 const Advert = ()=>{
    const callback =(e) =>{
      console.log(e)
    }
    return (
        <div className="ad-div comm-box">
          <div className='blog-title'>优秀博主</div>
          <div className="box">
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account" onClick={callback}/>
                <Avatar size={28} icon="qq"  className="account" />
                <Avatar size={28} icon="wechat"  className="account"  />
                <Avatar size={28} icon="WeiboCircleOutlined"  className="account"  />
            </div>
        </div>
    )
 }

 export default Advert