import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Popover from 'antd/es/popover';
import Button from 'antd/es/button';
import Carousel from 'antd/es/carousel';
import registerServiceWorker from './registerServiceWorker';
const content = (
    <div>
        <p>Github:<a href="https://www.github.com/Dearkano"> https://www.github.com/Dearkano</a></p>
        <p>微博：<a href="https://weibo.com/vaynetian">VayneTian</a></p>
        <p>厨代码 写币 炒偶像 (扑哧)</p>
    </div>
);
// let signature = <div style={{display:'flex',flexDirection:'column'}}>

// <div width="300px">
// <Carousel autoplay effect="fade" width="300px" style={{width:"300px"}}>
//     <div><img style={{width:"300px"}}src="http://file.cc98.org/v2-upload/b0o23z1b.jpg" /></div>
//     <div><img style={{width:"300px"}}src="http://file.cc98.org/v2-upload/2tvnoq2c.jpg" /></div>
//     <div><img style={{width:"300px"}}src="http://file.cc98.org/v2-upload/bkk31mvx.jpg" /></div>
//     <div><img style={{width:"300px"}}src="http://file.cc98.org/v2-upload/lu23oym3.jpg" /></div>
//   </Carousel>,

//   </div>

// <Popover content={content} title={<a href="https://www.github.com/ZJU-CC98/Forum">CC98 Durian</a>}>
//     <Button style={{ width: "300px", background: "pink" }} type="dashed">Yooooo~</Button>
// </Popover>

// </div>;
let signature = 


<Popover content={content} title={<a href="https://www.github.com/ZJU-CC98/Forum">CC98 Durian</a>}>
    <Button style={{ width: "300px", background: "pink" }} type="dashed">Yooooo~</Button>
</Popover>

;
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
