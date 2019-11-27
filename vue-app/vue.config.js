module.exports = {
  baseUrl: './',
  configureWebpack:{
    //模拟数据
    devServer:{
      before(app){
        //虚拟用户名
        let userpoor=[
          {username:'xiaodd',password:'123456'},
          {username:'qq666666',password:'123456'}
        ];
        //虚拟注册接口
        app.get('/app/getPost',function(req,res){
          const {username,password}=req.query
            const userlength=userpoor.filter(v=>v.username==username).length
            if(userlength>0){
              res.json({
                success:false,
                message:'用户名已存在'
              })
            }else{
              res.json({
                success:true,
                message:'注册成功'
              })
            }
        })
        //虚拟登入接口
        let tokenPwd = 'wangaosi'
        app.get('/app/login',function(req,res){
          const {username,password}=req.query;
          const userlength=userpoor.filter(v=>v.username==username).length
          if(userlength>0){
            const passwordLength = userpoor.filter(v=>v.password==password).length;
            if(passwordLength>0){
              res.json({
                succes:1,
                mgs:'登入成功',
                token:tokenPwd+'-'+username+'-'+(new Date().getTime()+1000*60*60)
              })
            }else{
              res.json({
                succes:0,
                mgs:'密码错误'
              })
            }
          }else{
            res.json({
              succes:false,
              mgs:'用户名不存在'
            })
          }
        });
        //轮播图虚拟数据
        app.get('/api/banner',(req,res)=>{
          res.json({
              data:[  {
                url: 'https://list.vip.com/100353853.html?ff=6|11|2|2|32',
                image: 'https://c.vpimg1.com/upcb/2019/09/16/60/ias_156862182157781_570x273_90.jpg'
                },
                {
                  url: 'https://list.vip.com/100174602.html?ff=6|11|2|2|23',
                  image: "https://c.vpimg1.com/upcb/2019/04/29/48/ias_155652612415965_570x273_90.jpg"
                },
                {
                  url: 'https://list.vip.com/100243275.html?ff=6|11|2|2|48',
                  image: 'https://c.vpimg1.com/upcb/2019/07/08/195/ias_156258300325231_570x273_90.jpg'
                }]
          })
        })
        //商品分类虚拟数据
        app.get('/app/sort',function(req,res){
          res.json({
            data:[
                [{
                url: 'https://list.vip.com/100353853.html?ff=6|11|2|2|32',
                image: 'https://c.vpimg1.com/upcb/2019/09/16/60/ias_156862182157781_570x273_90.jpg',
                mgs:'分类一'
              },
              {
                url: 'https://list.vip.com/100353853.html?ff=6|11|2|2|32',
                image: 'https://c.vpimg1.com/upcb/2019/09/16/60/ias_156862182157781_570x273_90.jpg',
                mgs:'分类一'
              },
              {
                url: 'https://list.vip.com/100353853.html?ff=6|11|2|2|32',
                image: 'https://c.vpimg1.com/upcb/2019/09/16/60/ias_156862182157781_570x273_90.jpg',
                mgs:'分类一'
              },
              {
                url: 'https://list.vip.com/100353853.html?ff=6|11|2|2|32',
                image: 'https://c.vpimg1.com/upcb/2019/09/16/60/ias_156862182157781_570x273_90.jpg',
                mgs:'分类一'
              },
              {
                url: 'https://list.vip.com/100353853.html?ff=6|11|2|2|32',
                image: 'https://c.vpimg1.com/upcb/2019/09/16/60/ias_156862182157781_570x273_90.jpg',
                mgs:'分类一'
              },
              {
                url: 'https://list.vip.com/100353853.html?ff=6|11|2|2|32',
                image: 'https://c.vpimg1.com/upcb/2019/07/08/195/ias_156258300325231_570x273_90.jpg',
                mgs:'分类二'
              },
              {
                url: 'https://list.vip.com/100353853.html?ff=6|11|2|2|32',
                image: 'https://c.vpimg1.com/upcb/2019/07/08/195/ias_156258300325231_570x273_90.jpg',
                mgs:'分类二'
              },
              {
                url: 'https://list.vip.com/100353853.html?ff=6|11|2|2|32',
                image: 'https://c.vpimg1.com/upcb/2019/07/08/195/ias_156258300325231_570x273_90.jpg',
                mgs:'分类二'
              },
              {
                url: 'https://list.vip.com/100353853.html?ff=6|11|2|2|32',
                image: 'https://c.vpimg1.com/upcb/2019/07/08/195/ias_156258300325231_570x273_90.jpg',
                mgs:'分类二'
              },
              {
                url: 'https://list.vip.com/100353853.html?ff=6|11|2|2|32',
                image: 'https://c.vpimg1.com/upcb/2019/07/08/195/ias_156258300325231_570x273_90.jpg',
                mgs:'分类二'
              },
              ],
              [{
                url: 'https://list.vip.com/100174602.html?ff=6|11|2|2|23',
                image: "https://c.vpimg1.com/upcb/2019/04/29/48/ias_155652612415965_570x273_90.jpg",
                mgs:'分类三'
              },
              {
                url: 'https://list.vip.com/100174602.html?ff=6|11|2|2|23',
                image: "https://c.vpimg1.com/upcb/2019/04/29/48/ias_155652612415965_570x273_90.jpg",
                mgs:'分类三'
              },
              {
                url: 'https://list.vip.com/100174602.html?ff=6|11|2|2|23',
                image: "https://c.vpimg1.com/upcb/2019/04/29/48/ias_155652612415965_570x273_90.jpg",
                mgs:'分类三'
              },
              {
                url: 'https://list.vip.com/100174602.html?ff=6|11|2|2|23',
                image: "https://c.vpimg1.com/upcb/2019/04/29/48/ias_155652612415965_570x273_90.jpg",
                mgs:'分类三'
              },
              {
                url: 'https://list.vip.com/100174602.html?ff=6|11|2|2|23',
                image: "https://c.vpimg1.com/upcb/2019/04/29/48/ias_155652612415965_570x273_90.jpg",
                mgs:'分类三'
              },
              {
                url: 'https://list.vip.com/100174602.html?ff=6|11|2|2|23',
                image: "https://c.vpimg1.com/upcb/2019/04/29/48/ias_155652612415965_570x273_90.jpg",
                mgs:'分类三'
              },
              {
                url: 'https://list.vip.com/100174602.html?ff=6|11|2|2|23',
                image: "https://c.vpimg1.com/upcb/2019/04/29/48/ias_155652612415965_570x273_90.jpg",
                mgs:'分类三'
              },
              {
                url: 'https://list.vip.com/100174602.html?ff=6|11|2|2|23',
                image: "https://c.vpimg1.com/upcb/2019/04/29/48/ias_155652612415965_570x273_90.jpg",
                mgs:'分类三'
              },
              {
                url: 'https://list.vip.com/100174602.html?ff=6|11|2|2|23',
                image: "https://c.vpimg1.com/upcb/2019/04/29/48/ias_155652612415965_570x273_90.jpg",
                mgs:'分类三'
              },
              {
                url: 'https://list.vip.com/100174602.html?ff=6|11|2|2|23',
                image: "https://c.vpimg1.com/upcb/2019/04/29/48/ias_155652612415965_570x273_90.jpg",
                mgs:'分类三'
              },
              ]
            ]
          })
        })
      //获取分类页的分类接口
      app.get('/api/classify',(req,res)=>{
        switch(req.query.type){
            case '0':
            res.json({
                data:[
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                      {
                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                        label:'华为'
                    },
                      {
                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                        label:'荣耀'
                    },
                      {
                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                        label:'雪梨手机'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                      {
                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                        label:'华为'
                    },
                      {
                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                        label:'荣耀'
                    },
                      {
                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                        label:'雪梨手机'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                      {
                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                        label:'华为'
                    },
                      {
                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                        label:'荣耀'
                    },
                      {
                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                        label:'雪梨手机'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                      {
                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                        label:'华为'
                    },
                      {
                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                        label:'荣耀'
                    },
                      {
                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                        label:'雪梨手机'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                      {
                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                        label:'华为'
                    },
                      {
                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                        label:'荣耀'
                    },
                      {
                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                        label:'雪梨手机'
                    },
                    
                ]
            });
            break;
            case '1':
            res.json({
                data: [
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                ]
            });
            break;
            case '2':
            res.json({
                data: [
                    {
                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                        label:'华为'
                    },
                    {
                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                        label:'华为'
                    },
                    {
                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                        label:'华为'
                    },
                    {
                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                        label:'华为'
                    }
                ]
            });
            break;
            case '3':
            res.json({
                data: [
                    {
                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                        label:'荣耀'
                    },
                    {
                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                        label:'荣耀'
                    },
                    {
                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                        label:'荣耀'
                    },
                    {
                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                        label:'荣耀'
                    },
                ]
            });
            break;
            case '4':
            res.json({
                data: [
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                ]
            });
            break;
            case '5':
            res.json({
                data: [
                    {
                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                        label:'雪梨手机'
                    },
                    {
                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                        label:'雪梨手机'
                    },
                    {
                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                        label:'雪梨手机'
                    },
                    {
                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                        label:'雪梨手机'
                    },
                ]
            });
            break;
            case '6':
            res.json({
                data: [
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                    {
                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                        label:'小米'
                    },
                ]
            });
            break;
        }
    })
    



      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
