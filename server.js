// 서버에 관한 부분을 여기서 처리.
const app = require('./app.js');
const port = 3000;

app.listen(port, ()=> {
  console.log('Express listening on port', port);
})